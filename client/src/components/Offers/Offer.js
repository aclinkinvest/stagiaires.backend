import React, {useEffect, useState} from 'react'
import NewsletterSubscribe from '../Home/Partials/NewsletterSubscribe';
import Footer from "../Home/Partials/Footer";
import Navbar from "./Partials/Navbar";
import Header from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import { createInvoice, getOffer, updateInvoice } from '../../redux/actions/offers';
import * as api from "../../api";

const Offer = () => {

	const initialState = {
		recruiter: {

        },
        genre: '',
        Lieu: '',
        paid: '',
        studyLevel: '',
        carrierLevel: '',
        experience: 0,
        deadline: new Date(),
        duration: 0,
        description: '',
        missions: '',
        jobDescription: [],
        profile: [],
        musts: [],
        applicationDocuments: [],
        skills: [],
        recruitmentProcedure: '',
	}

	const [offerData, setOfferData] = useState(initialState)
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const [ client, setClient] = useState(null)
    const [type, setType] = React.useState('Offer')
    const [status, setStatus ] = useState('')
    const { id } = useParams()
    const clients = useSelector((state) => state.offers.offers)
    const { offer } = useSelector((state) => state.offers);
    const dispatch = useDispatch()
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))

	useEffect(() => {
        dispatch(getOffer(id));
        // eslint-disable-next-line
      }, [id]);

    useEffect(() => {
        dispatch(getClientsByUser({search: user?.result._id || user?.result?.googleId}));
        // eslint-disable-next-line
    }, [dispatch]);


    useEffect(() => {
        if(offer) {
            //Automatically set the default offer values as the ones in the offer to be updated
            setOfferData(offer)
            setRates(offer.rates)
            setClient(offer.client)
            setType(offer.type)
            setStatus(offer.status)
            setSelectedDate(offer.dueDate)
        }
    }, [offer])


    useEffect(() => {
        if(type === 'Receipt') {
            setStatus('Paid')
        } else {
            setStatus('Unpaid')
        }
    },[type])

    const clientsProps = {
        options: clients,
        getOptionLabel: (option) => option.name
      };


    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

  const handleRates =(e) => {
    setRates(e.target.value)
    setOfferData((prevState) => ({...prevState, tax: e.target.value}))
  }

    // console.log(offerData)
    // Change handler for dynamically added input field
    const handleChange =(index, e) => {
        const values = [...offerData.items]
        values[index][e.target.name] = e.target.value
        setOfferData({...offerData, items: values})

    }

    /*useEffect(() => {
            //Get the subtotal
            const subTotal =()=> {
            var arr = document.getElementsByName("amount");
            var subtotal = 0;
            for(var i = 0; i < arr.length; i++) {
                if(arr[i].value) {
                    subtotal += +arr[i].value;
                }
                // document.getElementById("subtotal").value = subtotal;
                setSubTotal(subtotal)
            }
        }

        subTotal()

    }, [offerData])*/




    const handleAddField = (e) => {
        e.preventDefault()
        setOfferData((prevState) => ({...prevState, items: [...prevState.items,  {itemName: '', unitPrice: '', quantity: '', discount: '', amount: '' }]}))
    }

    const handleRemoveField =(index) => {
        const values = offerData.items
        values.splice(index, 1)
        setOfferData((prevState) => ({...prevState, values}))
        // console.log(values)
    }


    const CustomPaper = (props) => {
        return <Paper elevation={3} {...props} />;
      };


    return (
        <a href="login.html" className="utf-job-listing">
			  <div className="utf-job-listing-details">
				<div className="utf-job-listing-company-logo"> <img src="images/entreprises/ceet.jpg" alt=""/> </div>
				<div className="utf-job-listing-description">
					<div className="utf-job-listing-footer">
						<ul className="comp-s-type">

							<span style= {{fontSize: "18px"}} data-toggle="tooltip" data-tippy-placement="top" title="Nom de l'entreprise"> <b>CEET</b> </span>

						 	<span className="dashboard-status-button utf-job-status-item green" data-toggle="tooltip" data-tippy-placement="top" title="Type de stage"><i className="icon-material-outline-business-center"></i> Stage de fin d'études</span>
						</ul>
					</div>
				  <div className="utf-job-listing-footer">
					<ul>

						<span style={{fontSize: "18px", color: "black"}}  data-toggle="tooltip" data-tippy-placement="top" title="Désignation du poste" > Développeur Web PHP </span>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Date de début du stage"><i className="icon-feather-calendar"></i> 01/07/2021</li>
						<li data-toggle="tooltip" data-tippy-placement="top" title="Durée du stage"><i className="icon-material-outline-access-time"></i> 3 mois</li>

					</ul>
				</div>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Lieu du stage"><i className="icon-material-outline-location-on"></i> Lomé</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Stage Rémunéré"><i className="icon-feather-dollar-sign"></i> Rémunéré</li>
					  <li data-toggle="tooltip" data-tippy-placement="top" title="Date de publication"><i className="icon-feather-calendar"></i> 11/06/2021</li>
					  <span className="dashboard-status-button utf-job-status-item red" data-toggle="tooltip" data-tippy-placement="top" title="Date limite"><i className="icon-feather-calendar"></i> 30/06/2021</span>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon" data-toggle="tooltip" data-tippy-placement="top" title="Voir plus tard"></span>

			   </div>
			</a>
    )
}

export default Offer
