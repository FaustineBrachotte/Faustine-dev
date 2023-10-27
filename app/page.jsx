import Image from 'next/image'
import Link from 'next/link'
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
          <div className={style.presentation__text}>
            <h1 className={`${style.presentation__h1des} ${'anim'}`}>Bonjour !</h1>
            <div className={style.presentation__desc}>
              <p className={`${style.presentation__desc__p1} ${'anim'}`}>
              Je suis Faustine Brachotte, développeuse web spécialisée dans la création de sites sur mesure.
              </p>
              <p className={`${style.presentation__desc__p2} ${'anim'}`}>
              Je conçois des sites de A à Z, de la création du design à la mise en ligne. 
              </p>
              <p className={`${style.presentation__desc__p3} ${'anim'}`}>
              &nbsp;&nbsp;&nbsp; Mon objectif est de donner vie à vos idées en ligne, en mettant en avant votre vision, en répondant à vos besoins et objectifs, tout en garantissant une expérience utilisateur unique. 
              </p>
              <p className={`${style.presentation__desc__p4} ${'anim'}`}>
              Travaillons ensemble pour concrétiser vos projets web de manière créative et personnalisée. 
              </p>
            </div>
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
          <Link href="https://byheloiseweiner.fr" target="_blank" rel="noreferrer">
            <div className={style.portfolio__realisations__item}>
              <Image className={style.portfolio__img} src={heloise} alt="" />
              <p>Héloïse</p>
            </div>
          </Link>
          <Link href="https://claudine-slowdwich.com" target="_blank" rel="noreferrer">
            <div className={style.portfolio__realisations__item}>
              <Image className={style.portfolio__img} src={claudine} alt="" />
              <p>Claudine</p>
            </div>
          </Link>
          <Link href="https://agrisolarpv.com" target="_blank" rel="noreferrer">
            <div className={style.portfolio__realisations__item}>
              <Image className={style.portfolio__img} src={agrisolarpv} alt="" />
              <p>Agrisolarpv</p>
            </div>
          </Link>
        </div>
      </section>
    </main></>
  )
}
