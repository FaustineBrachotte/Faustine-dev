import Image from 'next/image'
import style from './page.module.scss'
import profilePic from '/app/assets/profile-pic.jpg'
import faustine from '/app/assets/faustine.png'
import heloise from '/app/assets/heloise.png'
import claudine from '/app/assets/claudine.png'
import agrisolarpv from '/app/assets/agrisolarpv.png'
import Navbar from '/app/components/navbar'
import '../styles/style.css'

export default function Home() {
  return (
    <>
    <Navbar /><main>
      <section className={style.presentationBackground} id="presentation">
        <span className={style.presentation}>
          <span className={style.presentation__background} />
          <Image className={style.presentation__img} src={profilePic} alt="" />
          <h1 className={`${style.presentation__h1des} ${'anim'}`}>Hello !</h1>
          <div className={style.presentation__text}>
            <p className="anim">
              Maecenas hendrerit risus quam, et sollicitudin libero aliquam
              gravida. Morbi rhoncus eleifend tellus, ut ultrices orci volutpat
              sed. Fusce facilisis eget turpis vel aliquam. Nullam magna turpis,
              euismod in varius imperdiet, volutpat id nisl.
            </p>
            <br />
            <p className="anim">
              Nulla eget diam sem. Phasellus in quam non est efficitur fermentum
              ut et eros. Aenean vel viverra lacus. Vestibulum eu purus sit amet
              magna suscipit finibus rhoncus venenatis ex. Vivamus neque enim,
              porta nec interdum in, convallis eget arcu.
            </p>
          </div>
        </span>
      </section>
      <section className={style.portfolio} id="realisations">
        <h1>Réalisations</h1>
        <div className={style.portfolio__realisations}>
        <div className={style.portfolio__realisations__item}>
        <Image className={style.portfolio__img} src={faustine} alt="" />
            <p>Faustine</p>
          </div>
          <div className={style.portfolio__realisations__item}>
          <Image className={style.portfolio__img} src={heloise} alt="" />
            <p>Héloïse</p>
          </div>
          <div className={style.portfolio__realisations__item}>
          <Image className={style.portfolio__img} src={claudine} alt="" />
            <p>Claudine</p>
          </div>
          <div className={style.portfolio__realisations__item}>
          <Image className={style.portfolio__img} src={agrisolarpv} alt="" />
            <p>Agrisolarpv</p>
          </div>
        </div>
      </section>
    </main></>
  )
}
