import Layout from '../components/Layout'
import Content from '../components/Content'
import AddSection from '../components/AddSection'

export default function Home({ pokemons }) {
  return (
    <Layout>
      <Content>
        <AddSection />
      </Content>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  const data = await response.json()
  return { props: { pokemons: data.results } }
}
