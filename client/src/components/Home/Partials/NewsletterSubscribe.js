import React from 'react'

const NewsletterSubscribe = () => {
   
    return (
        <section className="utf_cta_area_item utf_cta_area2_block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="utf_subscribe_block">
                                <div className="col-xl-8 col-md-7">
                                    <div className="section-heading">
                                        <h2 className="utf_sec_title_item utf_sec_title_item2">Abonnez-vous à notre newsletter!</h2>
                                        <p className="utf_sec_meta">Abonnez-vous pour obtenir les dernières mises à jour et informations.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-5">
                                    <div className="contact-form-action">
                                        <form method="post">
                                            <i className="icon-material-baseline-mail-outline"></i>
                                            <input className="form-control" type="email" placeholder="Entrer votre email" required={true} />
                                            <button className="utf_theme_btn" type="submit">S'abonner</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default NewsletterSubscribe
