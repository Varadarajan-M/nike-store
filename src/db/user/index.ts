import {
	Pool,
	Connection,
	RowDataPacket,
	ResultSetHeader,
} from 'mysql2/promise';

type MysqlConnection = Pool | Connection;

const baseQuery = `SELECT id,username,email,provider,google_id AS googleId,created_at as createdAt FROM users`;

const queryWithPassword = `SELECT id,username,email,provider,google_id AS googleId, password, created_at as createdAt FROM users`;

export interface IUser extends RowDataPacket {
	id?: number;
	username: string;
	email: string;
	password?: string | null;
	provider: string;
	googleId?: string | null;
	createdAt?: string;
}

const _findUserBy = async (
	conn: MysqlConnection,
	property: string,
	value: any,
	showPrivateFields = false,
): Promise<IUser | undefined> => {
	const query = showPrivateFields ? queryWithPassword : baseQuery;
	const [rows] = await conn.query<IUser[]>(`${query} WHERE ${property} = ?`, [
		value,
	]);
	return !!rows.length ? rows[0] : undefined;
};

const findAllUsers = async (
	conn: MysqlConnection,
): Promise<IUser[] | undefined> => {
	const [rows] = await conn.query<IUser[]>(baseQuery);
	return !!rows.length ? rows : undefined;
};

const findUserById = async (conn: MysqlConnection, id: number) =>
	await _findUserBy(conn, 'id', id);

const findUserByGoogleId = async (conn: MysqlConnection, googleId: string) =>
	await _findUserBy(conn, 'google_id', googleId);

const findUserByEmail = async (conn: MysqlConnection, email: string) =>
	await _findUserBy(conn, 'email', email);

const findPrivateUserByEmail = async (conn: MysqlConnection, email: string) =>
	await _findUserBy(conn, 'email', email, true);

const createUser = async (
	conn: MysqlConnection,
	user: Pick<
		IUser,
		'username' | 'email' | 'password' | 'provider' | 'googleId'
	>,
) => {
	const query = `INSERT INTO users(username,email,password,provider,google_id) VALUES(?,?,?,?,?)`;
	const [rows] = await conn.query<ResultSetHeader>(query, [
		user.username,
		user.email,
		user.password,
		user.provider,
		user.googleId,
	]);
	if (rows?.insertId) {
		const user = await findUserById(conn, +rows?.insertId);
		return user;
	}
	return undefined;
};

export {
	findAllUsers,
	findUserById,
	findUserByGoogleId,
	findUserByEmail,
	findPrivateUserByEmail,
	createUser,
};
