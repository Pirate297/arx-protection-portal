import bcrypt from 'bcryptjs';

const password = 'ARX2025!';
const hash = await bcrypt.hash(password, 10);
console.log('Password:', password);
console.log('Hash:', hash);

