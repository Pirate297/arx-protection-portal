// API handler for course registration with Monday.com integration
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    preferredContact,
    occupation,
    howHeard,
    knowledgeLevel,
    courseName,
    sessionDate,
    sessionTime,
    sessionLocation,
    price
  } = req.body;

  // Monday.com API configuration
  const MONDAY_API_URL = 'https://api.monday.com/v2';
  const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU3NDMxMzkxMCwiYWFpIjoxMSwidWlkIjo1NTk5Mjg4NiwiaWFkIjoiMjAyNS0xMC0xNVQxMzo1ODowMy42ODRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjEzNDkyMzIsInJnbiI6InVzZTEifQ.SyH1wMKy5_4BeJSsK-BOAVIXhyUSFW2LBWW73UxcLnw';
  const BOARD_ID = '8759982115';

  try {
    // Create item name with course and session info
    const itemName = `${lastName}, ${firstName} - ${courseName} (${sessionDate})`;

    // Prepare column values for Monday.com
    const columnValues = JSON.stringify({
      text_mkpazmb6: firstName, // First Name
      email_mkpa21r9: { email: email, text: email }, // Email
      phone_mkpa1axh: { phone: phone, countryShortName: 'AW' }, // Phone
      color_mkpacvnk: { label: preferredContact }, // Preferred Method of Communication
      text_mkpazsrt: occupation || '', // Occupation
      color_mkpae3xj: { label: courseName }, // Choose Class
      text_mkpad9mh: howHeard || '', // How did you hear about us
      color_mkpaqs25: { label: knowledgeLevel } // Level of Knowledge
    });

    // GraphQL mutation to create item in Monday.com
    const mutation = `
      mutation {
        create_item (
          board_id: ${BOARD_ID},
          item_name: "${itemName}",
          column_values: ${JSON.stringify(columnValues).replace(/"/g, '\\"')}
        ) {
          id
        }
      }
    `;

    const response = await fetch(MONDAY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: mutation })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Monday.com API errors:', data.errors);
      return res.status(500).json({ error: 'Failed to create registration', details: data.errors });
    }

    // Success
    return res.status(200).json({
      success: true,
      message: 'Registration successful',
      mondayItemId: data.data.create_item.id
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

