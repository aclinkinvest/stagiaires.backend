import React from "react";
/*import BarIndex from "../Home/Partials/BarIndex";*/
/*import FaqComponent from '../../Layouts/Items/Single/FaqComponent';*/
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
//import Collapsible from 'react-collapsible';
import CollapsiblePersonnalise from '../Home/Partials/CollapsiblePersonnalise';
import Footer from "../Home/Partials/Footer";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";


class Faq extends React.Component {

  lsitesFaqs: Array<any> = [
    { name: "1. What does it Cost to advertise?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." },
    { name: "2. How we sell your product here?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." },
    { name: "3. What is our features product?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." },
    { name: "4. Is it ecommerce site?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." },
    { name: "5. How we take payment from our customers?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." },
    { name: "6. How will I know if people are responding to my classified ad?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." },
    { name: "7. I Know I want to place an ad,but I still have questions.What should I do?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Duis a velit eget urna mattis ultricies. Aliquam nibh ipsum, aliquet nec sollicitudin non, fermentum nec diam. Vestibulum ac urna vehicula, dapibus dui quis, aliquet neque. Sed ac tristique purus. Vestibulum tempor, erat eu porta tempor, erat ipsum cursus dui, eu tempus mauris leo id mi Sed ultrices sollicitudin vehicula Proin in ullamcorper massa." }
  ]

  render() {
    /*const faqs = this.lsitesFaqs.map((item) => <FaqComponent key={item.name} faq={item} />);*/
    /* <div>

              <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="accordion js-accordion margin-bottom-70">

                    {faqs}

                  </div>
                </div>
              </div>
            </div>

        </div> */
    return (
        <><Header />

      <div >
        {/*<BarIndex racine={"Accueil"}>FAQ</BarIndex>*/}
        <div className="container">

        <div className="row margin-top-20">
          <div className="col-xl-12">
            <div className="text-center margin-bottom-20">
              <h2>Votre question n’est pas dans cette FAQ ?</h2>
              Dans ce cas il vous suffit de nous contacter via le formulaire de contact.
              Nos conseillers répondront à vos questions dans les plus brefs délais
            </div>
            <div className="margin-bottom-70">
              <CollapsiblePersonnalise title="Confidentialité" >
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="utf-accordion-content">
                        <h2> 1. Votre site est gratuit, vendez-vous mes données personnelles ?</h2>
                        Nous vendons des espaces publicitaires sur notre site. En revanche, nous ne partageons pas ni vendons vos données d'identification personnelles, ni vos coordonnées, à des services marketing à moins que vous ne nous donniez votre accord. Toute société qui achèterait un accès à notre CVthèque et à notre galerie de profils, et l'utiliserait à des fins marketing, enfreindrait nos Conditions d'utilisation. Si une société utilise votre CV ou votre profil pour vous vendre des produits, faites-le nous savoir pour que nous puissions mener une enquête.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 2. Quelle Confidentialité pour mes informations ? </h2>
                        Nous attachons une grande importance au respect de la vie privée et prenons toutes les mesures nécessaires pour assurer la confidentialité et la sécurité des données personnelles que nous recueillons conformément à la loi Nº2019-014 du 29 Octobre 2019. Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d’un environnement sécurisé. Les destinataires des données personnelles du candidat sont les recruteurs auprès desquels le candidat a postulé, ainsi que nos sous-traitants (hébergeur, prestataires informatiques…), et auxiliaires de justice en cas de contentieux. Les informations saisies, insérées ou envoyées par e-mail ne sont utilisées que dans le cadre du recrutement. stagiares.tg garantit qu’aucune consultation de votre CV Pro digital, ni envoi de notification ou d’e-mail sur votre adresse ne sera fait sans votre accord ou consentement préalable. Vous pouvez à tout moment modifier ou supprimer les informations et renseignements contenus dans votre Espace Candidat.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 3. Quelle Confidentialité pour mes recherches ? </h2>
                        Aucune information personnelle relative à l'utilisation de nos services (vos recherches, alertes mails et clics vers les sites de recruteurs) n’est accessible hormis par l’équipe de stagiares.tg.
                      </div>
                    </div>
                  </div>
              </CollapsiblePersonnalise>

              <CollapsiblePersonnalise title="Connexion au site en tant que Candidat" >
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="utf-accordion-content">
                        <h2> 1. Je veux m’inscrire, combien cela me coutera-t-il? </h2>
                        S’inscrire sur stagiares.tg est 100% gratuit ! En vous inscrivant, la consultation d’offres de stage et d’emploi, la création de CV Pro digital en ligne, l’envoi et la gestion de vos candidatures, la réception des notifications et alertes mails, … ainsi que toutes les fonctionnalités utiles à votre démarche d’emploi sur stagiaires.tg sont totalement gratuites !
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 2. Je veux m’inscrire, comment faire ? </h2>
                        Pour vous inscrire à stagiares.tg, vous avez le choix entre l’inscription standard, en cliquant sur le bouton bleu en haut à droite du site ou la connexion en un clic avec l’un de vos comptes Facebook, LinkedIn ou Google+. Vous devrez ensuite compléter votre profil Candidat.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 3. Pourquoi créer et compléter à 100%  mon CV Pro digital en ligne ? </h2>
                        Les recruteurs disposent d’outils automatisés de recherche et tri des CV Pro digitaux. Si vous ne complétez pas votre CV Pro digital il ne sera pas immédiatement visible sur notre CVthèque. A noter que plus votre CV Pro est complété (100%) et précis, plus vos chances de recrutement sont importantes. Vous pouvez compléter jusqu'à 5 types de CV Pro digitaux et 5 lettres de motivation et les modifier ou mettre à jour gratuitement à tout moment.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 4. J’ai perdu mon mot de passe, comment le récupérer ? </h2>
                        Pour récupérer votre mot de passe, cliquez sur le bouton « Mot de passe oublié » sur la page de connexion. Nous vous demanderons d’entrer votre adresse e-mail. Un lien de réinitialisation de mot de passe vous sera alors instantanément envoyé.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 5. J’ai changé d’adresse mail. Comment la modifier dans mon compte stagiares.tg ? </h2>
                        Tout d’abord, connectez-vous à votre compte et cliquez sur la rubrique « Mon compte ». En voyant apparaitre un premier bloc nommé : « Infos persos & contacts », cliquez sur le petit crayon disponible en haut à droite de celui-ci. La dernière ligne du formulaire auquel vous accéderez vous permettra alors de supprimer et/ou d’ajouter une nouvelle adresse mail en cliquant sur (X) et/ou (+).
                      </div>
                    </div>
                  </div>
              </CollapsiblePersonnalise>

              <CollapsiblePersonnalise title="La recherche de stage et d’emploi " >
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="utf-accordion-content">
                        <h2> 1. A quelle fréquence les offres sont-elles actualisées ? </h2>
                        Les offres sur stagiares.tg.com sont actualisées quotidiennement. Notre équipe collecte les nouvelles offres et met à jour les offres déjà présentes sur le site tous les jours.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 2. A qui s'adressent les offres de stage et d’emploi publiées sur le site ?  </h2>
                        Le site est complètement généraliste : différents postes, de différents secteurs d’activité, y sont proposés.Les offres de stage diffusées sur stagiares.tg s’adressent aux étudiants, titulaires ou non d’un diplôme, aux débutants comme aux plus expérimentés. Divers types de stages pour des postes de différents secteurs d’activité y sont proposés.Les offres de 1er emploi diffusées sur stagiares.tg s’adressent aux jeunes lauréats, titulaires d’un diplôme (Bac, BTS, Licence, Master, ...) aux débutants comme aux plus expérimentés. Les offres d’emploi pour des missions (freelances, intérim,…) sont également destinées aux jeunes lauréats à la recherche d’emploi et freelances.

                      </div>
                      <div className="utf-accordion-content">
                        <h2> 3. Comment optimiser ma recherche de stage ou d’emploi avec stagiares.tg? </h2>
                        stagiares.tg se veut être votre partenaire carrière, pour cela, nous mettons gratuitement à votre disposition plusieurs outils et fonctionnalités dont certains visant à optimiser votre recherche:
                         Un Tableau de bord Candidat vous permettant de recenser les offres correspondant à votre profil d’emploi mais également de suivre vos candidatures.
                         Des alertes par mail vous informant des dernières offres d’emploi disponibles en fonction de vos préférences.
                         Une application stagiares.tg de recherche d’emploi pour Android et iOs vous permettant de vous connecter, de consulter toutes les offres et de postuler directement.
                         Une présence sur les réseaux sociaux :
                         Une page fan comprenant conseils et annonces ainsi qu’un Forum Facebook,
                         Des alertes de postes et des conseils sur Twitter,
                         Une chaîne stagiares.tg sur Youtube,
                         Un groupe de discussion sur LinkedIn.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 4. Qu’est-ce qu’une Alerte Offre? </h2>
                        L’alerte Offre de stage ou d’emploi est une fonctionnalité pratique et gratuite qui vous permet de rester informé des opportunités disponibles sur le site en étant notifié à fréquence régulière des nouvelles offres de stage et d’emploi publiées qui correspondent au profil de votre CV Pro digital.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 5. Comment Créer/désactiver mes Alertes Offres ? </h2>
                        Connectez-vous sur votre compte stagiares.tg et lancez une recherche depuis le moteur de recherche de la page d’accueil, utilisez le filtre de gauche pour affiner votre recherche. Cliquez sur le bouton bleu « Créer Alerte Offre », et renseignez ensuite les filtres dans la fenêtre qui s’affichera. Choisissiez un titre à donner à votre alerte, activez son envoi et sélectionnez dans la liste la fréquence d’envoi et sauvegarder.
                        NB : Vous avez la possibilité d’avoir jusqu’à 5 alertes Offres activées.
                      </div>
                    </div>
                  </div>
              </CollapsiblePersonnalise>

              <CollapsiblePersonnalise title="Postuler à une offre de stage et d’emploi " >
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="utf-accordion-content">
                        <h2> 1. Comment postuler à une offre de stage ou d'emploi ?</h2>
                        A partir de votre Espace Candidat cliquez sur « postuler » sur l’offre de stage ou d’emploi, choisissez votre CV Pro digital ainsi que la lettre de motivation puis cliquez sur « postuler ». Votre candidature sera transmise à l’entreprise en question et enregistrée dans votre espace personnel à l’onglet « Suivi des candidatures » de votre Tableau de bord.A l’issue de votre candidature, un e-mail de confirmation sera envoyé à votre adresse électronique mentionnant que votre candidature a bien été transmise à l’entreprise.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 2. Que se passe-t-il lorsque je postule à une offre de stage ou d'emploi ? </h2>
                        Lorsque vous postulez à une offre, votre candidature est directement transmise à l’entreprise en question qui la traite et vous contacte si votre profil correspond au poste. stagiares.tg en tant que média de recrutement, n’intervient pas dans le processus de recrutement. Pour vous permettre un suivi régulier, toutes les offres auxquelles vous postulez sont archivées dans Espace Candidat, accessible par votre Tableau de bord dans la rubrique « Mes candidatures ».

                      </div>
                      <div className="utf-accordion-content">
                        <h2> 3. L'offre de stage ou d'emploi a disparu, pourquoi ? </h2>
                        Une offre d'emploi sur stagiares.tg.com a une période de validité de 4 semaines, vous pouvez d’ailleurs consulter la date d’expiration en bas de l’annonce. Si vous avez postulé à cette offre durant la période de validité, sachez que votre candidature a automatiquement été prise en compte.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 3. Que veut dire Offre désactivée ?  </h2>
                        Le message « offre d’emploi désactivée » indique de l’offre à laquelle vous avez postulé a expiré ainsi que sa visibilité. En effet, une offre sur le site stagiares.tg.com a une période de validité de 4 semaines. Dépassé ce délai, l’offre est désactivée. Cependant si vous avez reçu ce message cela signifie que votre candidature a bel et bien été transmise à l’entreprise.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 4. Je n'ai pas reçu de réponse à ma candidature, pourquoi? </h2>
                        S’il y a une chose que les candidats détestent dans le recrutement, c’est de ne pas être tenus au courant…
                        Il faut savoir que stagiares.tg en tant que média de recrutement n'intervient pas dans le processus de recrutement. Vos candidatures sont envoyées directement aux recruteurs qui les traitent. Toutefois, sur stagiaires.tg les recruteurs disposent d’outils pour notifier et tenir informés les candidats quelle que soit l’étape à laquelle le candidat s’arrête dans le processus de recrutement, cela contribue à donner une bonne image de l'entreprise….
                        N’hésitez pas à noter l’entreprise sur la qualité de votre « expérience candidat ».
                      </div>
                    </div>
                  </div>
              </CollapsiblePersonnalise>

              <CollapsiblePersonnalise title="Le dépôt de CV et le CV Pro digital " >
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-11">
                      <div className="utf-accordion-content">
                        <h2> 1. Mon CV Pro est-il actif et visible ?</h2>
                        Tout à fait, mais il est toutefois recommandé de le mettre à jour régulièrement de manière à augmenter vos chances d’être remarqué dans la CVthèque par le recruteur: Si vous avez décidé de ne pas compléter votre CV Pro digital, votre CV personnel pourra également être vu par le recruteur en cas de tri par profil de candidats ou de candidature à une offre.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 2. Combien de temps mon cv reste-il sur le site ? </h2>
                        Vos CV et/ou CV Pro ne seront pas supprimés de nos bases à moins que vous les supprimiez vous-même. Cela dit, un CV Pro qui n’est pas mis à jour aura moins de chance d’attirer les recruteurs, c’est pour cela que nous vous recommandons de mettre régulièrement à jour votre CV Pro et de le renseigner intégralement.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 3. Impossible de joindre mon CV personnel, pourquoi ? </h2>
                        Afin que votre CV puisse être joint sans problème sur le site, celui-ci ne doit pas dépasser les 2 Mo. Les formats acceptés sont : .doc, .docx, .txt, .pdf.
                      </div>
                      <div className="utf-accordion-content">
                        <h2> 4. Comment télécharger mon CV Pro digital stagiares.tg ? </h2>
                        Pour débloquer le téléchargement de votre CV Pro digital afin de pouvoir l’utiliser pour postuler en dehors de notre plateforme stagiares.tg vous devez au préalable souscrire au Pack CV Pro. Ensuite en vous connectant à votre compte stagiares.tg, cliquez sur la rubrique «Mes CVs » puis sur la seconde icone en haut à droite du bloc indiquant « Télécharger en pdf » afin que celui-ci se télécharger sur votre ordinateur au format .docx ou .pdf.
                      </div>
                    </div>
                  </div>
              </CollapsiblePersonnalise>

              {/* <CollapsiblePersonnalise title="" ></CollapsiblePersonnalise> */}

            </div>

          </div>
            </div>

            {/* <Collapsible trigger="Start here">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible> */}
            </div>
            <NewsletterSubscribe />
            <Footer />

        </div>

      // <div>
      //   <div className="container">
      //     <div className="row margin-top-40">
      //       <div className="col-xl-12">
      //         <div className="text-center margin-bottom-40">
      //           <h2>Votre question n’est pas dans cette FAQ ?</h2>
      //           Dans ce cas il vous suffit de nous contacter via le formulaire de contact.
      //           Nos conseillers répondront à vos questions dans les plus brefs délais.
      //         </div>
      //         <div className="accordion js-accordion margin-bottom-70">
      //           <div className="utf-accordion-item js-accordion-item">
      //             <div className="accordion-header js-accordion-header" style={{ fontSize: "1.5em" }} >Confidentialité</div>
      //             <div className="accordion-body js-accordion-body">
      //               <div className="row">
      //                 <div className="col-md-1"></div>
      //                 <div className="col-md-11">
      //                   <div className="utf-accordion-content">
      //                     <h2> 1. Votre site est gratuit, vendez-vous mes données personnelles ?</h2> <br />
      //                     Nous vendons des espaces publicitaires sur notre site. En revanche, nous ne partageons pas ni vendons vos données d'identification personnelles, ni vos coordonnées, à des services marketing à moins que vous ne nous donniez votre accord. Toute société qui achèterait un accès à notre CVthèque et à notre galerie de profils, et l'utiliserait à des fins marketing, enfreindrait nos Conditions d'utilisation. Si une société utilise votre CV ou votre profil pour vous vendre des produits, faites-le nous savoir pour que nous puissions mener une enquête.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 2. Quelle Confidentialité pour mes informations ? </h2> <br />
      //                     Nous attachons une grande importance au respect de la vie privée et prenons toutes les mesures nécessaires pour assurer la confidentialité et la sécurité des données personnelles que nous recueillons conformément à la loi Nº2019-014 du 29 Octobre 2019. Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d’un environnement sécurisé. Les destinataires des données personnelles du candidat sont les recruteurs auprès desquels le candidat a postulé, ainsi que nos sous-traitants (hébergeur, prestataires informatiques…), et auxiliaires de justice en cas de contentieux. Les informations saisies, insérées ou envoyées par e-mail ne sont utilisées que dans le cadre du recrutement. stagiares.tg garantit qu’aucune consultation de votre CV Pro digital, ni envoi de notification ou d’e-mail sur votre adresse ne sera fait sans votre accord ou consentement préalable. Vous pouvez à tout moment modifier ou supprimer les informations et renseignements contenus dans votre Espace Candidat.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 3. Quelle Confidentialité pour mes recherches ? </h2> <br />
      //                     Aucune information personnelle relative à l'utilisation de nos services (vos recherches, alertes mails et clics vers les sites de recruteurs) n’est accessible hormis par l’équipe de stagiares.tg.
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="utf-accordion-item js-accordion-item">
      //             <div className="accordion-header js-accordion-header" style={{ fontSize: "1.5em" }} >Connexion au site en tant que Candidat</div>
      //             <div className="accordion-body js-accordion-body">
      //               <div className="row">
      //                 <div className="col-md-1"></div>
      //                 <div className="col-md-11">
      //                   <div className="utf-accordion-content">
      //                     <h2> 1. Je veux m’inscrire, combien cela me coutera-t-il? </h2> <br />
      //                     S’inscrire sur stagiares.tg est 100% gratuit ! En vous inscrivant, la consultation d’offres de stage et d’emploi, la création de CV Pro digital en ligne, l’envoi et la gestion de vos candidatures, la réception des notifications et alertes mails, … ainsi que toutes les fonctionnalités utiles à votre démarche d’emploi sur stagiaires.tg sont totalement gratuites !
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 2. Je veux m’inscrire, comment faire ? </h2> <br />
      //                     Pour vous inscrire à stagiares.tg, vous avez le choix entre l’inscription standard, en cliquant sur le bouton bleu en haut à droite du site ou la connexion en un clic avec l’un de vos comptes Facebook, LinkedIn ou Google+. Vous devrez ensuite compléter votre profil Candidat.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 3. Pourquoi créer et compléter à 100%  mon CV Pro digital en ligne ? </h2> <br />
      //                     Les recruteurs disposent d’outils automatisés de recherche et tri des CV Pro digitaux. Si vous ne complétez pas votre CV Pro digital il ne sera pas immédiatement visible sur notre CVthèque. A noter que plus votre CV Pro est complété (100%) et précis, plus vos chances de recrutement sont importantes. Vous pouvez compléter jusqu'à 5 types de CV Pro digitaux et 5 lettres de motivation et les modifier ou mettre à jour gratuitement à tout moment.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 4. J’ai perdu mon mot de passe, comment le récupérer ? </h2> <br />
      //                     Pour récupérer votre mot de passe, cliquez sur le bouton « Mot de passe oublié » sur la page de connexion. Nous vous demanderons d’entrer votre adresse e-mail. Un lien de réinitialisation de mot de passe vous sera alors instantanément envoyé.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 5. J’ai changé d’adresse mail. Comment la modifier dans mon compte stagiares.tg ? </h2> <br />
      //                     Tout d’abord, connectez-vous à votre compte et cliquez sur la rubrique « Mon compte ». En voyant apparaitre un premier bloc nommé : « Infos persos & contacts », cliquez sur le petit crayon disponible en haut à droite de celui-ci. La dernière ligne du formulaire auquel vous accéderez vous permettra alors de supprimer et/ou d’ajouter une nouvelle adresse mail en cliquant sur (X) et/ou (+).
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="utf-accordion-item js-accordion-item">
      //             <div className="accordion-header js-accordion-header" style={{ fontSize: "1.5em" }} >La recherche de stage et d’emploi </div>
      //             <div className="accordion-body js-accordion-body">
      //               <div className="row">
      //                 <div className="col-md-1"></div>
      //                 <div className="col-md-11">
      //                   <div className="utf-accordion-content">
      //                     <h2> 1. A quelle fréquence les offres sont-elles actualisées ? </h2> <br />
      //                     Les offres sur stagiares.tg.com sont actualisées quotidiennement. Notre équipe collecte les nouvelles offres et met à jour les offres déjà présentes sur le site tous les jours.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 2. A qui s'adressent les offres de stage et d’emploi publiées sur le site ?  </h2> <br />
      //                     Le site est complètement généraliste : différents postes, de différents secteurs d’activité, y sont proposés.Les offres de stage diffusées sur stagiares.tg s’adressent aux étudiants, titulaires ou non d’un diplôme, aux débutants comme aux plus expérimentés. Divers types de stages pour des postes de différents secteurs d’activité y sont proposés.Les offres de 1er emploi diffusées sur stagiares.tg s’adressent aux jeunes lauréats, titulaires d’un diplôme (Bac, BTS, Licence, Master, ...) aux débutants comme aux plus expérimentés. Les offres d’emploi pour des missions (freelances, intérim,…) sont également destinées aux jeunes lauréats à la recherche d’emploi et freelances.

      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 3. Comment optimiser ma recherche de stage ou d’emploi avec stagiares.tg? </h2> <br />
      //                     stagiares.tg se veut être votre partenaire carrière, pour cela, nous mettons gratuitement à votre disposition plusieurs outils et fonctionnalités dont certains visant à optimiser votre recherche:
      //                      Un Tableau de bord Candidat vous permettant de recenser les offres correspondant à votre profil d’emploi mais également de suivre vos candidatures.
      //                      Des alertes par mail vous informant des dernières offres d’emploi disponibles en fonction de vos préférences.
      //                      Une application stagiares.tg de recherche d’emploi pour Android et iOs vous permettant de vous connecter, de consulter toutes les offres et de postuler directement.
      //                      Une présence sur les réseaux sociaux :
      //                      Une page fan comprenant conseils et annonces ainsi qu’un Forum Facebook,
      //                      Des alertes de postes et des conseils sur Twitter,
      //                      Une chaîne stagiares.tg sur Youtube,
      //                      Un groupe de discussion sur LinkedIn.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 4. Qu’est-ce qu’une Alerte Offre? </h2> <br />
      //                     L’alerte Offre de stage ou d’emploi est une fonctionnalité pratique et gratuite qui vous permet de rester informé des opportunités disponibles sur le site en étant notifié à fréquence régulière des nouvelles offres de stage et d’emploi publiées qui correspondent au profil de votre CV Pro digital.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 5. Comment Créer/désactiver mes Alertes Offres ? </h2> <br />
      //                     Connectez-vous sur votre compte stagiares.tg et lancez une recherche depuis le moteur de recherche de la page d’accueil, utilisez le filtre de gauche pour affiner votre recherche. Cliquez sur le bouton bleu « Créer Alerte Offre », et renseignez ensuite les filtres dans la fenêtre qui s’affichera. Choisissiez un titre à donner à votre alerte, activez son envoi et sélectionnez dans la liste la fréquence d’envoi et sauvegarder.
      //                     NB : Vous avez la possibilité d’avoir jusqu’à 5 alertes Offres activées.
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="utf-accordion-item js-accordion-item">
      //             <div className="accordion-header js-accordion-header" style={{ fontSize: "1.5em" }} >Postuler à une offre de stage et d’emploi </div>
      //             <div className="accordion-body js-accordion-body">
      //               <div className="row">
      //                 <div className="col-md-1"></div>
      //                 <div className="col-md-11">
      //                   <div className="utf-accordion-content">
      //                     <h2> 1. Comment postuler à une offre de stage ou d'emploi ?</h2> <br />
      //                     A partir de votre Espace Candidat cliquez sur « postuler » sur l’offre de stage ou d’emploi, choisissez votre CV Pro digital ainsi que la lettre de motivation puis cliquez sur « postuler ». Votre candidature sera transmise à l’entreprise en question et enregistrée dans votre espace personnel à l’onglet « Suivi des candidatures » de votre Tableau de bord.A l’issue de votre candidature, un e-mail de confirmation sera envoyé à votre adresse électronique mentionnant que votre candidature a bien été transmise à l’entreprise.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 2. Que se passe-t-il lorsque je postule à une offre de stage ou d'emploi ? </h2> <br />
      //                     Lorsque vous postulez à une offre, votre candidature est directement transmise à l’entreprise en question qui la traite et vous contacte si votre profil correspond au poste. stagiares.tg en tant que média de recrutement, n’intervient pas dans le processus de recrutement. Pour vous permettre un suivi régulier, toutes les offres auxquelles vous postulez sont archivées dans Espace Candidat, accessible par votre Tableau de bord dans la rubrique « Mes candidatures ».

      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 3. L'offre de stage ou d'emploi a disparu, pourquoi ? </h2> <br />
      //                     Une offre d'emploi sur stagiares.tg.com a une période de validité de 4 semaines, vous pouvez d’ailleurs consulter la date d’expiration en bas de l’annonce. Si vous avez postulé à cette offre durant la période de validité, sachez que votre candidature a automatiquement été prise en compte.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 3. Que veut dire Offre désactivée ?  </h2> <br />
      //                     Le message « offre d’emploi désactivée » indique de l’offre à laquelle vous avez postulé a expiré ainsi que sa visibilité. En effet, une offre sur le site stagiares.tg.com a une période de validité de 4 semaines. Dépassé ce délai, l’offre est désactivée. Cependant si vous avez reçu ce message cela signifie que votre candidature a bel et bien été transmise à l’entreprise.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 4. Je n'ai pas reçu de réponse à ma candidature, pourquoi? </h2> <br />
      //                     S’il y a une chose que les candidats détestent dans le recrutement, c’est de ne pas être tenus au courant…
      //                     Il faut savoir que stagiares.tg en tant que média de recrutement n'intervient pas dans le processus de recrutement. Vos candidatures sont envoyées directement aux recruteurs qui les traitent. Toutefois, sur stagiaires.tg les recruteurs disposent d’outils pour notifier et tenir informés les candidats quelle que soit l’étape à laquelle le candidat s’arrête dans le processus de recrutement, cela contribue à donner une bonne image de l'entreprise….
      //                     N’hésitez pas à noter l’entreprise sur la qualité de votre « expérience candidat ».
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="utf-accordion-item js-accordion-item">
      //             <div className="accordion-header js-accordion-header" style={{ fontSize: "1.5em" }} >Le dépôt de CV et le CV Pro digital </div>
      //             <div className="accordion-body js-accordion-body">
      //               <div className="row">
      //                 <div className="col-md-1"></div>
      //                 <div className="col-md-11">
      //                   <div className="utf-accordion-content">
      //                     <h2> 1. Mon CV Pro est-il actif et visible ?</h2> <br />
      //                     Tout à fait, mais il est toutefois recommandé de le mettre à jour régulièrement de manière à augmenter vos chances d’être remarqué dans la CVthèque par le recruteur: Si vous avez décidé de ne pas compléter votre CV Pro digital, votre CV personnel pourra également être vu par le recruteur en cas de tri par profil de candidats ou de candidature à une offre.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 2. Combien de temps mon cv reste-il sur le site ? </h2> <br />
      //                     Vos CV et/ou CV Pro ne seront pas supprimés de nos bases à moins que vous les supprimiez vous-même. Cela dit, un CV Pro qui n’est pas mis à jour aura moins de chance d’attirer les recruteurs, c’est pour cela que nous vous recommandons de mettre régulièrement à jour votre CV Pro et de le renseigner intégralement.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 3. Impossible de joindre mon CV personnel, pourquoi ? </h2> <br />
      //                     Afin que votre CV puisse être joint sans problème sur le site, celui-ci ne doit pas dépasser les 2 Mo. Les formats acceptés sont : .doc, .docx, .txt, .pdf.
      //                   </div>
      //                   <div className="utf-accordion-content">
      //                     <h2> 4. Comment télécharger mon CV Pro digital stagiares.tg ? </h2> <br />
      //                     Pour débloquer le téléchargement de votre CV Pro digital afin de pouvoir l’utiliser pour postuler en dehors de notre plateforme stagiares.tg vous devez au préalable souscrire au Pack CV Pro. Ensuite en vous connectant à votre compte stagiares.tg, cliquez sur la rubrique «Mes CVs » puis sur la seconde icone en haut à droite du bloc indiquant « Télécharger en pdf » afin que celui-ci se télécharger sur votre ordinateur au format .docx ou .pdf.
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>

      //       </div>
      //     </div>
      //   </div>
      //   <NewsletterSubscribe />
      //   <Footer />
      // </div>

          </>

    );
  }
}

export default Faq;