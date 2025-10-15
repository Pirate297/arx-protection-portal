import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Monday.com API configuration
const MONDAY_API_URL = 'https://api.monday.com/v2';
const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU3NDMxMzkxMCwiYWFpIjoxMSwidWlkIjo1NTk5Mjg4NiwiaWFkIjoiMjAyNS0xMC0xNVQxMzo1ODowMy42ODRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjEzNDkyMzIsInJnbiI6InVzZTEifQ.SyH1wMKy5_4BeJSsK-BOAVIXhyUSFW2LBWW73UxcLnw';
const BOARD_ID = '8759982115';

app.use(cors());
app.use(express.json());

app.post('/api/course-registration', async (req, res) => {
  try {
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
      sessionLocation
    } = req.body;

    // Create item name
    const itemName = `${lastName}, ${firstName} - ${courseName} (${sessionDate})`;

    // Prepare column values
    const columnValues = {
      text_mkpazmb6: firstName,
      email_mkpa21r9: { email: email, text: email },
      phone_mkpa1axh: { phone: phone, countryShortName: 'AW' },
      color_mkpacvnk: { label: preferredContact },
      text_mkpazsrt: occupation || '',
      color_mkpae3xj: { label: courseName },
      text_mkpad9mh: howHeard || '',
      color_mkpaqs25: { label: knowledgeLevel }
    };

    // GraphQL mutation
    const mutation = `
      mutation {
        create_item (
          board_id: ${BOARD_ID},
          item_name: "${itemName.replace(/"/g, '\\"')}",
          column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
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

    res.json({
      success: true,
      message: 'Registration successful',
      mondayItemId: data.data.create_item.id
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

