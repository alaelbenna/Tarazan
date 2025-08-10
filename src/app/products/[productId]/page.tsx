export default async function ProductsList({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    return <h1> details about product {productId}</h1>;
}