import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../libs/mysql';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const db = await pool.getConnection();
    const [projectList] = await db.query(`select * from project order by p_no desc`);

    db.release();
    res.status(200).json({ result: projectList });
  } catch (error) {
    res.status(500).json({ error });
  }
}
