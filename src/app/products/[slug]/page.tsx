type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  }
}

export default function ProductDetail ({ params }: Props) {
  return <h1>{params.slug} page</h1>
}
