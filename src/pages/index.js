import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Frontend Mentor | Huddle landing page with alternating feature blocks
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" alt="logo"></img>
        <button>Try It Free</button>
      </header>
      <main className={styles.main}>
        <section className={styles.started}>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Get Started For Free</button>
          </div>

          <img src="/illustration-mockups.svg" className="mockups illustration"></img>
        </section>

        <section className={styles.cards}>
          <div className={styles.card}>
            <img src="/illustration-grow-together.svg" className="grow together illustration"></img>
            <div>
              <h2>Grow Together</h2>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="/illustration-flowing-conversation.svg" className="flowing conversation illustration"></img>
            <div>
              <h2>Flowing Conversations</h2>
              <p>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="/illustration-your-users.svg" className="users illustration"></img>
            <div>
              <h2>Your Users</h2>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Ready To Build Your Community?</h2>
            <button>Get Started For Free</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
      <img src="/logo-white.svg" className={styles.logo} alt="logo"></img>
        <div className={styles.footer_div}>
          <div>
            
            <div className={styles.address}>
              <img src="/icon-location.svg" alt="location icon"></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className={styles.address}>
              <img src="/icon-phone.svg" alt="phone icon"></img>
              <p>+1-543-123-4567</p>
            </div>

            <div className={styles.address}>
              <img src="/icon-email.svg" alt="email icon"></img>
              <p>example@huddle.com</p>
            </div>
          </div>

          <div className={styles.links}>
            <p>About Us <hr/></p>
            
            <p>What We Do <hr/></p>
            <p>FAQ <hr/></p>
            <p>Career <hr/></p>
            <p>Blog <hr/></p>
            <p>Contact Us <hr/></p>
          </div>

          <div className={styles.social_media}>
            <img src="/facebook.svg" alt="facebook icon"></img>
            <img src="/twitter.svg" alt="twitter icon"></img>
            <img src="/instagram.svg" alt="instagram icon"></img>
          </div>
          </div>
        <p className={styles.copyright}>
          &copy; Copyright 2018 Huddle. All rights reserved.
        </p>
      </footer>
    </>
  );
}
