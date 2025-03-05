import Link from "next/link";
import "../../assets/style/footer.css";

export default function Footer() {
  return (
    <footer className="py-8 px-3 my-container footer">
      <hr className="block my-3" />
      <section className="flex max-w-[2200]  justify-around gap-3 w-full text-xl">
        <article className="capitalize ">
          <nav>
            <ul>
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">product</Link>
              </li>
              <li>
                <Link href="">delivery</Link>
              </li>
            </ul>
          </nav>
        </article>
        <article>
          <section>
            <ul>
              <li>
                <Link href="tel:+37494739446">+37494739446</Link>
              </li>
              <li>
                <Link href="mailto:hovhannes.varosyan02@mail.ru">
                  hovhannes.varosyan02@mail.ru
                </Link>
              </li>
              <li>karut 7 poxoc tun 7</li>
            </ul>
          </section>
        </article>
      </section>
      <section>
        <p>
          <i>все авторские права зашишены 2024@</i>
        </p>
      </section>
    </footer>
  );
}
