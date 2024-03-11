import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Promptopia is an AI prompting tool for modern world to
          discover, create and share creative prompts. 
          <br />
          <a className="blue_gradient" href="https://github.com/adrianhajdin/project_next_14_ai_prompt_sharing/tree/main">
            credit
          </a>
        </p>

        <Feed />
    </section>
  )
}

export default Home;