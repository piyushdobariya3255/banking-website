import React from 'react';
import '../style-css/Help.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { colors } from '@mui/material';
import Navbar from './Navbar';

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Help() {
    return (
        <div className='Help'>
            <Navbar></Navbar>
            <div className="container">
           
                <div className="box-section">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-container">
                                <img className="image-setting" src="https://kore-wordpress.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/10/26214832/Kore_ai-BankAssist-Featured-Hero-Banner.png" alt="Error" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="side-text">
                                <h2 style={{color:"#4895ef"}}>We are here to help you ?</h2>
                                <div className="conte">
                                    <p> we understand that your financial needs are as unique as you are. That's why we're dedicated to providing personalized banking solutions tailored to your specific goals and aspirations. Whether you're saving for the future, investing in your dreams, or simply managing your day-to-day finances, we're here to help you every step of the way.</p>

                                    <h3 style={{color:"#4895ef"}}>Explore Our Services</h3>
                                    <p>Personal Banking: From checking and savings accounts to loans and credit cards, we offer a comprehensive range of personal banking solutions designed to meet your individual needs.</p>
                                    <p>Business Banking: Whether you're a small startup or a large corporation, our business banking services provide the tools and expertise you need to thrive in today's competitive marketplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="middle-section">
                    <div className="card-group">

                        <div className="card-1"data-aos="zoom-in">
                            <div className="icon-container" >
                                <CreditCardIcon style={{fontSize:"40px"}}/>
                                <p className='mt-2'>Block Debit Card</p>
                            </div>
                        </div>
                        <div className="card-1" data-aos="zoom-in">
                            <div className="icon-container">
                                <SecurityIcon style={{fontSize:"40px"}}/>
                                <p className='mt-2'>Security</p>
                            </div>
                        </div>
                        <div className="card-1" data-aos="zoom-in">
                            <div className="icon-container">
                                <MiscellaneousServicesIcon style={{fontSize:"40px"}}/>
                                <p className='mt-2'>Inqury Services</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="questions-section">
                    <div className="questions">
                        <h1 className='faqs' style={{color:"#4895ef"}}>Frequently Asked Questions</h1>
                        <div className="accordian-container">

                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            How can I protect my account ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                Protecting your bank account is crucial to safeguarding your financial security. Here are some tips to help you enhance the security of your bank account:

                                                Strong Passwords/PINs: Create strong, unique passwords for online banking, and never share them with anyone. Avoid using easily guessable information like birthdays or names. Also, set a unique PIN for your ATM/debit card.

                                                Two-Factor Authentication (2FA): Enable two-factor authentication wherever possible. This adds an extra layer of security by requiring not only a password but also a second form of verification, such as a code sent to your mobile phone.

                                                Regularly Monitor Account Activity: Keep a close eye on your account statements and transaction history. Report any suspicious activity or unauthorized transactions to your bank immediately.

                                                Update Contact Information: Ensure that your bank has your current contact information, including your mobile number and email address. This allows them to reach you quickly if they detect any unusual activity on your</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Help;