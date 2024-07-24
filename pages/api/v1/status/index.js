import database from "infra/database.js";

export default async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  response.status(200).json({
    message:
      "Hello, world! Estou aprendendo fundamentos da programação no curso.dev!",
  });
}
