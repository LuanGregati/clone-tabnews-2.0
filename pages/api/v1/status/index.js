export default function status(request, response) {
  response.status(200).json({
    message:
      "Hello, world! Estou aprendendo fundamentos da programação no curso.dev!",
  });
}
