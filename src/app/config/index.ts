import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  db_url: process.env.db_url,
  port: process.env.port,
};
