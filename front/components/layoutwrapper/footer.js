import Link from "next/link";
import "../../assets/style/footer.css";

export default function Footer() {
  return (
    <footer className="py-8 w-full px-5 sm:px-3  footer">
      <hr className="block my-3" />
      <section className="flex max-w-[1250px] mx-auto gap-3 w-full text-xl">
        <article className="capitalize  hidden w-2/4 sm:flex ">
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
        <article className="capitalize sm:w-2/4  w-full ">
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
      <p className="my-3">
        <i>все авторские права зашишены 2024@</i>
      </p>
    </footer>
  );
}
