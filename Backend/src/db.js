import conn from './conn.js';

export async function getAllPosts() {
  const result = await conn.query('SELECT * FROM Guatepedia;');
  return result.rows;
}

export async function createPost(
  Pearson,
  Fewdescription,
  History,
  Crucialevents,
  Curiosities,
  AlternativeText,
  AlternativeDescription,
  Textreferences,
  images,
) {
  const result = await conn.query(
    'INSERT INTO Guatepedia (Pearson, Few_Description, History, Crucial_Events, Curiosities, AlternativeText, AlternativeDescription, Text_References, images) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
    [
      Pearson,
      Fewdescription,
      History,
      Crucialevents,
      Curiosities,
      AlternativeText,
      AlternativeDescription,
      Textreferences,
      images],
  );
  return result;
}

export async function getOnePost(postId) {
  const postIdnumb = parseInt(postId, 10);
  const result = await conn.query('SELECT * FROM Guatepedia WHERE id = $1;', [postIdnumb]);
  return result.rows;
}

export async function editOnePost(postId, columna, valor) {
  const postIdnumb = parseInt(postId, 10);
  const sql = `UPDATE Guatepedia SET ${columna} = $1 WHERE id = $2;`;
  const result = await conn.query(sql, [valor, postIdnumb]);
  return result;
}
export async function deletePost(postId) {
  const postIdnumb = parseInt(postId, 10);
  const result = await conn.query('DELETE FROM Guatepedia WHERE id = $1;', [postIdnumb]);
  return result;
}


export async function login(user, password_md5) {
  const result = await conn.query('SELECT id,rol FROM autentificacion WHERE nombre = $1 AND password = $2;', [user, password_md5])
  if (result.rows.length === 1) {
    const { id, rol } = result.rows[0];
    return { id, rol };
  }
  return false
}