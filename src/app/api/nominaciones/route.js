import nominacionesData from '@/data/nominaciones.json';

export async function GET() {
  return Response.json(nominacionesData);
}
