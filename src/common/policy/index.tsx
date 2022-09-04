import React from 'react';
import { OfficialParagraph } from "components"

export const PrivacyPolicy = () => {

    return (
        <>

            <OfficialParagraph

                className='sub no-order'
                title={"Introduction"}
                content={`This Privacy Notice (“Notice”) guides your use of our Website: www.shypdeck.com (“the Website”) 
                and your rights regarding our collection, use, storage and protection of your personal data when you visit,
                 access, browse through and/or use our Website or Services. Your privacy is important to us. `}
            />

            <OfficialParagraph

                className='sub no-order'
                title={`Your personal data that we process`}
                content={`Personal data means any information about an individual from which that person can be directly or 
                indirectly identified. We do not consider personal data to include information that has been made anonymous 
                such that it does not identify a specific user.`}
                items={[
                    `In connection with the services we provide, we collect personal and financial information from you 
                    while you use our services and websites. We may ask you to provide us with certain personal data directly
                     to contact or identify you, and some automatically for our Website to function effectively.`,
                    `The personal data we obtain from our users include: Full Name of User, their Email, Address, Phone Number,
                     Location, Receivers name, Receivers Phone Number, Receivers email, Receivers Address, Receivers Location.
                      In the case of our agents and delivery service providers, we require, their personal name, Email address,
                       Phone number, Registered Business Name, Location, Country and State. `
                ]}

            />

            <OfficialParagraph

                className='sub no-order'
                title={"Cookies"}
                content={`Cookies are tools used to collect information automatically from you when you visit a Website.
                 The only cookies we use are session cookies.`}
            />
            <OfficialParagraph

                className='sub order-numerical'
                title={`Lawful Bases for processing data`}
                content={`We are required to process your data under at least one of these lawful bases:`}
                items={[
                    `Legitimate interest: Processing your data is necessary for our legitimate interests or the 
                    legitimate interests of a third party, provided your rights and interests do not outweigh those interests.`,

                    `Consent: You have given explicit consent for us to process your data for a specific purpose.`,

                    `Contract: If your data processing is necessary for a contract you have with us or because we have asked 
                    you to take specific steps before entering into that contract.`,

                    `Legal obligation: If the processing of your data is necessary where there is a statutory obligation on us.`,

                    `Purpose of processing your data and the lawful basis`,
                ]}

            />

            <OfficialParagraph

                className='sub order-numerical'

                content={`We collect your data for the following purposes;`}

                items={[

                    `To process statistical data which will help us to enhance the quality of our service whenever you use our Website.`,

                    `To inform you whenever there are changes to our terms of business or services.`,

                    `To enable us to send targeted advertisements to you whenever we decide to introduce same to our Website.`,

                    `To enable us send you newsletters and materials relating to our service when you subscribe to our marketing communications.`,

                    `To enable you order for and fulfil delivery transactions on our Website.`,

                    `To enable us fulfil our KYC obligations and any other legal requirements where required from us. `

                ]}

            />

            <OfficialParagraph

                className='sub no-order'

                items={[

                    {
                        title: "Your rights as a data subject",

                        itemsClass: "alpha ml-5",

                        value: "The law vests you with certain rights as a data subject.They include the right to; ",

                        items: [

                            `access personal data we hold about you by requesting a copy of the personal data we hold about you; `,

                            `rectify such information where you believe it to be inaccurate;  `,


                            `restrict the processing of your data in certain circumstances; `,

                            `object to the processing of your data where we intend to process such data for marketing purposes;`,

                            `where feasible, receive all personal data you have provided to us —in a structured, 
                            commonly used, and machine - readable format—and transmit the information to another data controller; `,


                            `request the erasure of your data(also known as the right to be forgotten);`,

                            `withdraw your consent to the processing of your personal data; and`,

                            `lodge a complaint with a relevant authority, where you have reason to believe that we 
                            have violated the term(s) of this Privacy Notice. (You may complain or seek redress from us 
                                within 30 days from the time you first detected the alleged violation).`

                        ]


                    }

                ]}

            />


            <OfficialParagraph

                className='sub order-numerical'

                content={"You may seek to exercise any of the above rights at any time by sending an email to us via hello @shypdeck.com."}

                value={`The supervisory authority is the Nigerian Data Protection Bureau(NDPB), and you can
                 send your complaint via email to info @ndpb.gov.ng`}

            />


            <OfficialParagraph

                className='sub order-numerical'

                title={"Who we share your data with"}

                content={"We may share your data with the following third parties:"}

                items={[

                    `Financial Institutions: We use various financial institutions to facilitate payment transactions for our
                     services.We do this by providing a URL link which takes you to the Website of this financial institution.
                     We would not be responsible for any data breach arising from the use of these Financial Institutions Website. `,

                    `Law Enforcement Agencies: We may disclose your data pursuant to a court order, when we need to do so to 
                    comply with law or credit / debit card rules; or when we believe, in our sole discretion, that the disclosure
                     of personal information is necessary to prevent physical harm or financial loss, to report suspected illegal
                      activity or to investigate violations of our Terms of Use.`,

                    `Legal / Regulatory Authority: We may disclose your data if we believe it is reasonably necessary to 
                    comply with a law, regulation, order, subpoena, audit, or to protect the safety of any person, to address
                     fraud, security or technical issues.`

                ]}

            />

            <OfficialParagraph

                className='sub order-numerical'

                title={"Retention of your data"}

                value={`Your personal data or any other information collected will be stored for as long as necessary to
                 fulfil the purposes described in this Notice.However, we will also retain personal data based on relevant
                  provisions of applicable laws, to resolve disputes, and enforce our legal agreements and policies. 
                  We shall delete your data for targeted marketing purposes once you unsubscribe from our marketing communications.`}

                content={`Please note that we may retain your data for a more extended period, notwithstanding your request to 
                remove your data, where there is a legal requirement to do so.`}

            />


            <OfficialParagraph

                className='sub order-numerical'

                title={"How your data is stored"}

                value={`We store and process your data.Some of the safeguards we use are firewalls, data encryption and 
                information access authorisation controls.`}

                content={`Where there is an actual or suspected data breach capable of causing harm to your rights 
                and freedoms, we will notify you without undue delay and use our best effort to remedy the violation 
                within one(1) month from the date we notify you.`}

            />

            <OfficialParagraph

                className='sub order-numerical'

                title={`Marketing and communications`}

                content={`We only send marketing communications to you with your consent.You may choose to opt 
                out of our marketing emails by clicking on the ‘unsubscribe' button at the bottom of the page. `}

            />


            <OfficialParagraph

                className='sub order-numerical'

                title={`Security of your data`}

                value={`We are very particular about preserving your privacy and protecting your data.We deploy all 
                reasonable and appropriate technical and organisational measures to keep your data safe.However, 
                we cannot completely guarantee the security of any information you transmit via our Website, as 
                the internet is not an entirely secure place.Nevertheless, we are committed to doing our best to protect you.`}

            />

            <OfficialParagraph

                className="sub order-numerical"

                title={"Complaints"}

                value={`If you are concerned about an alleged breach of data protection law or any other regulation by us, 
                you can contact us via hello @shypdeck.com.We undertake to investigate and provide information about your 
                complaint within seven(7) days. `}

                content={`Please be informed that you may complain to the relevant data protection authority if your complaints
                 are not satisfactorily addressed. `}

            />



            <OfficialParagraph

                className="sub order-numerical"

                title={`Changes to this notice`}

                value={`We update our privacy notice from time to time.You will know this by checking the last 
                date of update on this page whenever you visit.`}

            />

            <OfficialParagraph

                className="sub order-numerical"

                title={"Contact Us"}

                dangerousContent={`
                                <p> If you have any questions relating to this Notice, your rights under this
                                 Notice, or are not satisfied with how we manage your personal data, kindly reach out to us via 
                                 <a href="mailto:hello@shypdeck.com">  hello@shypdeck.com </a> </p>`
                }

            />

        </>
    )

}