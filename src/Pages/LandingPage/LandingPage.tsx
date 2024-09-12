import { useState } from 'react';
import RequestInformation from '../QuoteResponse/RequestInformation';
import Review from '../QuoteResponse/Review';
import TermsandAttachments from '../QuoteResponse/TermsandAttachments';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';

const LandingPage = () => {
	const [index, setIndex] = useState(1);




	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<main >
				<div className='dashboard-first-card-boards mb-2 '>
					<div className='dashboard-first-card-container'>
						<p className='dashboard-first-card-h'>
							<span id='Quotes'>Quotes</span> / Quote Response</p>

						<div className='Request_container_group mt-4'>
							{[
								{ step: 1, title: "Request Information", description: "Provide details about the RFQ" },
								{ step: 2, title: "Terms and Attachments", description: "Payment and delivery terms" },
								{ step: 3, title: "Review", description: "Confirm all information provided" },
							].map(({ step, title, description }) => (
								<div key={step} className="Request_container" onClick={() => setIndex(step)}>
									<div className={index === step ? 'Information_number' : 'Information_number_outline'}>
										{step}
									</div>
									<div>
										<h3 className="Information_number_h3">{title}</h3>
										<p className="Information_number_p">{description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{index === 1 && <RequestInformation />}
				{index === 2 && <TermsandAttachments />}
				{index === 3 && <Review />}



			</main>
		</div>
	)
}

export default LandingPage