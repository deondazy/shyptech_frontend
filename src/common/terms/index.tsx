import React from 'react';
import { OfficialParagraph } from 'components';

export const TermsAndConditions: React.FC = ({ }) => {

    return (
        <>

            <OfficialParagraph

                listClass='ml-0'

                className='sub no-order'

                dangerousContent={`

                    <p className="color-dark pl-1">
                    These Terms of Use (the "Terms") represent a legally binding contract between you
                    and Shypdeck Technologies Limited ("Shypdeck", "we" or "us").
                    By accessing or using content; services and materials on Shypdeck's website
                    located at <a href="/"> https://www.shypdeck.com/ </a> (the "Website"),
                    any of the services provided therein (collectively, the "Services") and
                    the materials may include logos, text graphics, videos, images,
                    photos, software and other content (collectively, the "Materials"),
                    you agree that you have read, understood, accept and agree to be bound by these Terms.
                    If you do not agree with any of these Terms, do not access or otherwise make use of Shypdeck’s services.
                    </p>

                    `}

            />


            <OfficialParagraph

                listClass='ml-0'

                className='sub no-order'

                title='About Us:'

                items={[

                    `Shypdeck (“Shypdeck”, “We”, “Us”, or “Our”) is a platform which provides users an array of delivery 
                    service providers to select from in a bid to efficiently move goods from one point to another effectively
                     and at a convenient rate. Customers choice on their desired delivery service providers are adhered to with
                      a strong bias for prompt delivery on a case-by-case basis. `,

                    `Shypdeck may vary the Services from time to time at its absolute discretion, and users shall be 
                    notified of any such variations where necessary. Any changes will be posted on the Website(s). `,


                    `This “Terms of Use” is an Agreement between you and Shypdeck. It details Shypdeck’s 
                    obligations to you. It also highlights the risks of using our Services, and you must 
                    consider such risks carefully as the provisions of this Agreement will bind you through 
                    your use of this Website or any of our Services.`
                ]}
            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub no-order'

                title='Privacy Notice:'

                items={[

                    `Shypdeck is committed to managing your Personal Information in line with global industry best practices. 
                    You can read our Privacy Notice to understand how we use your information and the steps we take to protect your information. `,
                ]}
            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub order-numerical'

                title='Registration:'

                dangerousContent={`
                <div class="ml-3">
                        <p> 
                            To use our Platform, you do not have to register on the Platform or create an account by registering. You may however 
                            choose to subscribe to our mailing list & blog in order to receive updates about our Services from time to time. To 
                            subscribe for this, you will provide us with certain information that personally identifies you, such as your email,
                            first name, last name, phone number. We may seek to verify your information (by ourselves or through third parties) 
                            You permit us to do all these. You have the right to refuse to authorize the use and/or disclosure of your Personal 
                            Information after submitting your information by sending an email to 
                            <a href="mailto:hello@shypdeck.com"> hello@shypdeck.com </a>
                        </p>

                        <p> 
                            Some aspect of our Services may not be available in all locations, we may add to or remove the areas in which our 
                            Services are or are not available, at any time, without notice to you. No information on this website is intended to 
                            amount to advice, recommendation, or inducement to use any particular delivery service provider. 
                        </p>

                        <p> 
                            Please note that we are a technology business and only provide a one stop platform for easy access to delivery service 
                            providers registered on our Platform. We do not dictate or determine the estimated delivery time of our delivery service
                            providers. We also will not be responsible; directly or indirectly, for the loss of any goods in transit. We, therefore,
                            disclaim to the fullest extent possible under law, liability in relation to the foregoing.
                        </p>
                        
                    </div>`
                }
            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub order-numerical'

                title='Age Restriction:'

                items={[

                    `Our Website and Services are not directed to persons under 18 and businesses not in compliance with applicable regulatory laws.
                     We do not knowingly transact or provide any Services to the foregoing persons listed in this Clause.`,

                    `You are independently responsible for complying with all applicable laws related to your use of our Website and Services.`

                ]}

            />


            <OfficialParagraph

                listClass='ml-0'

                className='sub no-order'

                title='Change of Information:'

                items={[
                    `In the event that you change any information provided to us at registration, you agree to notify us
                     within seven [7] calendar days of such change. We may be unable to respond to you if you contact us 
                     from an address, telephone number, or email account that is not registered with us.`
                ]}

            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub order-numerical'

                title='Representations and Warranties:'

                content='You represent and warrant to Shypdeck that: '

                items={[
                    `You have full power and authority to enter into, execute, deliver and perform this Agreement as a customer and 
                    a delivery service provider; whichever is applicable; `,
                    `You will comply with this Agreement and all applicable local, state, national, and international laws, rules, and regulations;`,
                    `Any information you provide to us, both when you register and in the future, is and will be true, 
                    accurate, current, and complete;`,
                    `You will keep all information up-to-date; and`,
                    `You accept and agree to these Terms.`
                ]}

            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub no-order'

                title='Order Security'

                items={[
                    `You agree to not allow anyone else to access or use your information and tracking details at any time during your 
                    use of the Platform. You also undertake to comply with all reasonable instructions we may issue regarding placing 
                    an order on our Website. Where you share your personal information with anyone not privy to this Agreement, Shypdeck 
                    will not be liable to you for losses or damages. You undertake to contact Shypdeck if you become aware of any unauthorized order 
                    placed on our Website using your personal information. `,
                    `As a delivery service provider on our Platform, you undertake to notify Shypdeck of any suspicious order 
                    or unfulfilled order(s) which has been received more than thrice on our Website.`
                ]}

            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub no-order'

                title='Links to or Connections with Third Party Sites or Applications:'

                content={`
                    Our Services or communications to you may contain third-party content or links to third-party sites, applications, or Services 
                    (collectively, "Third Party Content'').
                    Our Services may also include features that allow you to connect with the social media accounts or 
                    Services provided by our delivery service providers and other third parties. We do not control, 
                    maintain, or endorse our delivery service providers content or services or any other Third-Party 
                    Content or Third-Party Services, and we are not liable for any damages, losses, failures, or 
                    problems caused by, related to, or arising from Third Party Content or Third-Party Services. 
                    Your interactions and business dealings with the Third-Party Content or Third-Party Services providers, 
                    including products or Services offered by such third parties, are solely between you and the third 
                    party. You should review all of the relevant terms and conditions associated with Third Party Content 
                    or Third-Party Services, including any Privacy Notices and Terms of Use. We are not responsible for 
                    any information you agree to share with third parties connected with Third Party Content or Third-Party Services. 
                    Any links or advertisements on this Website should not be taken as an endorsement by us of any kind.`
                }

            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub order-numerical'

                title={"Responsibilities:"}

                content={`By agreeing to these terms of use, you agree to the following responsibilities:`}

                items={[
                    `The usual and customary charges for any Services rendered by our delivery service providers profiled on 
                    the site will apply and will be entirely your responsibility. We shall do our best to provide you the 
                    applicable rates based on location whenever you make use of our Website. `,
                    `You are responsible for all use of the site and for all use of your Credentials, including use by others to whom 
                    you have given your credentials.`,
                    `You agree that you shall not copy, modify, adapt, translate, or reverse engineer any portion of the 
                    site, its content or materials, and/or the Services.`,
                    `You agree that you shall not carry out transactions on our Website using false information and under 
                    false or fraudulent pretenses.`,
                    `You shall not use any means, including software means, to conduct web scraping of any portion of the 
                    site, its content or materials, and/or the Services.`,
                    `You shall not access, retrieve, or index any portion of the site and/or the Services to construct or 
                    populate a searchable database of reviews related to the Services provided on the Website.`
                ]}

            />

            <OfficialParagraph

                listClass='ml-0'

                className='sub order-numerical'

                title={"Unacceptable Use: "}

                content={`You shall not permit any person (except where such a person is expressly authorized by you) to:`}

                items={[

                    `use this Website in a way that causes or could cause damage or restrict the availability or accessibility of the Platform;`,

                    `store, copy, transmit, publish or distribute any computer virus, spyware, Trojan horse, worm, 
                    keystroke logger or other malicious software via this Platform;`,

                    `conduct any fraudulent or illegal activities via the Platform; `,

                    `Copy, rent, lease, sell, transfer, assign, sublicense, disassemble, reverse engineer 
                    or decompile (except if expressly authorized 
                    by Shypdeck or by applicable statutory law), modify or alter any part of the Services;`,

                    `Violate the contractual, personal, intellectual property or other rights of any party, including by using, uploading, 
                    transmitting, distributing, or otherwise making available any information or material made available through the Services 
                    in any manner that infringes any copyright, trademark, patent, trade secret, or other rights of any party 
                    (including rights of privacy or publicity); Improperly use support channels or complaint buttons to make false 
                    reports to Shypdeck;`,


                    `Encourage any third party to (i) directly or indirectly generate usage, queries, impressions, or clicks through 
                    any automated, deceptive, fraudulent, or other invalid means; (ii) edit or modify any tag, or remove, obscure or 
                    minimize any tag in any way; or (iii) engage in any action or practice that reflects poorly on Shypdeck or 
                    otherwise disparages or devalues Shypdeck's reputation or goodwill;`,

                    `Make representations (with respect to Shypdeck), which are not approved in advance and in writing by Shypdeck.
                    You shall obtain Shypdeck's prior written approval to the content of any marketing message, and with respect to any 
                    use of Shypdeck's trade name and/or trademarks and/or designs in connection with the Services and Materials;`,

                    `Violate any applicable laws or regulations, or encourage or promote any illegal activity including, but not
                    limited to, copyright infringement, trademark infringement, defamation, invasion of privacy, identity theft,
                    hacking, cracking or distribution of counterfeit software, or cheats or hacks for the Services;`,

                    `Attempt to use the Services on or through any other platform or third-party service provider that 
                    Shypdeck does not authorize. Any such use is at your own risk and may subject you to additional or 
                    different terms. Shypdeck takes no responsibility for your use of the Services through any platform 
                    or third-party delivery service provider that is not authorized by it;`,

                    `Attempt to interfere with, hack into or decipher any transmissions to or from the servers for the Services;`,

                    `Interfere with the ability of others to enjoy using the Services, including disruption, overburden or aid 
                    the disruption or overburdening of the Website’ servers, or take actions that interfere with or 
                    materially increase the cost to provide the Services for the enjoyment of all its users;`,

                    `You hereby understand and agree that if fraudulent and/or illegal activity is associated with your 
                    transactions on the Website, We have the right to apply restrictions to your use of our Website through 
                    technologically lawful means and report such activity(ies) to the appropriate law enforcement agencies.`


                ]}

            />

            <OfficialParagraph

                content={`You agree to indemnify and hold Shypdeck and its employees, officers, directors, employees, consultants, 
                affiliates, agents, licensors, and business partners (collectively, the "Indemnified Entities") harmless from and against any and 
                all costs, damages, liabilities, and expenses (including attorneys’ fees and costs of defense) Shypdeck 
                or any other Indemnified Entity suffers in relation to, arising from, or for the purpose of avoiding, any claim 
                or demand from any dispute which may arise from your use of our Service(s) on the Website.`}

            />

            <OfficialParagraph

                className='sub no-order'

                title={"Viruses"}

                content={`
                            We do not guarantee that our Website will be secure or free from bugs or viruses. You are responsible 
                            for configuring your information technology, computer programme, phone, devices and platform in order to access 
                            the Website. You should use your own virus protection software. You must not misuse the Website by knowingly 
                            introducing viruses, trojans, worms, logic bombs, pretexting, phishing or other material which is 
                            malicious or technologically harmful. You must not attempt to gain unauthorized access to the Website, 
                            the server on which the Website is stored or any server, computer or database connected to the Website.`
                }

                items={[
                    `We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other 
                    technologically harmful material that may infect your mobile phone and the programs contained therein, computer, 
                    computer equipment, computer programs, data or other proprietary material due to your use of our site or to your 
                    downloading of any content on it, or on any website linked to it.
                    `
                ]}

            />

            <OfficialParagraph

                className='sub no-order'

                title={"Intellectual Property:"}


                items={[

                    {
                        title: "Our Content",
                        itemsClass: "sub",
                        value: `
                                All content and materials, including but not limited to images, text, visual interfaces, 
                                information, data, and computer code, provided by us through our Service (our "Content") 
                                and all related intellectual property rights are the property of Shypdeck and/or its third-party 
                                licensors. Our content is protected by Nigerian and international intellectual property laws and 
                                treaties. You are permitted to use our content only in relation to our Services. You may not copy, 
                                modify, sell, reproduce, distribute, republish, display, post, create derivative or collective works 
                                from, or transmit in any form our content, in whole or in part, without our express prior written consent. 
                                You may not reverse engineer or reverse compile any of the technology used to operate our Services on our Websites. 
                                Nothing in this Agreement or our Services grants you, any license or right to use our content 
                                except as expressly stated in this Agreement.`
                    },

                    {
                        title: "Our Delivery Service Provider Intellectual Property",
                        value: `Our Services may also display specific intellectual property, such as company, product, and Service name and logos, 
                        owned by our partner delivery service providers. Nothing in this Agreement or our Services grants you, 
                        by implication, estoppel, or otherwise, any license or right to copy, modify, sell, reproduce, distribute, 
                        republish, display, post, create derivative works from or transmit in any form any of their Intellectual Property.`
                    },

                    {
                        title: "Content Display and Additional Services",

                        value: `Subject to a User’s delivery order on the Website, there shall be displayed a result of 
                        searches of available delivery service providers who are available to satisfy the order and the 
                        attendant rate as well as recommended delivery timeline. Shypdeck reserves the unilateral right 
                        to change the results of the order applicable on the website. It may also transmit the delivery 
                        order to another delivery service provider which is different from the selected delivery service provider. `,
                        items: [
                            `Shypdeck may also introduce an extra fee for the purpose of insuring goods transmitted on our platform. 
                            You may opt to pay for same. Where you do not select and pay the attendant insurance fee as 
                            advised from time to time. You agree that you shall not hold us responsible for the loss or damage 
                            of any good; perishable or otherwise. `,

                        ]



                    }

                ]}

            />

            <OfficialParagraph

                className='sub no-order'

                title={"Disclaimer"}

                items={[

                    {
                        title:
                            " Service Disclaimer",
                        value: `The content of the Services that you obtain or receive from Shypdeck, and its delivery service provider,
                         partners, sponsors, advertisers, licensors or otherwise through the Services is for your use (as described above) only.`

                    },

                    {
                        title: "Disclaimer of Warranties",
                        value: "We try to keep Shypdeck available at all times, bug-free and safe, however, you use it at your own risk.",
                        items: [
                            `Our Website and Services are provided “ as is” without any express, implied and /or
                             statutory warranties.Without limiting the generality of the foregoing, Shypdeck makes no warranty 
                             that our Website and Services will meet your requirements or that our Website will be uninterrupted, 
                             timely, secure, or error - free.No advice or information, whether oral or written, obtained by you through 
                             our Website or from Shypdeck; through its authorized representatives, employees, contractors, shall create any warranty.`
                        ]
                    },



                ]}


            />


            <OfficialParagraph

                className='sub no-order'

                {...{
                    title: "Limitation of Liability",
                    value: `You agree to the limited liability clause to the maximum extent permitted by applicable law:
                         Shypdeck will in no way be liable for any direct, indirect, incidental, punitive, consequential,
                          special, or exemplary damages or damages relating to failures of telecommunications, the internet, 
                          electronic communications, corruption, security, loss or theft of data, viruses, spyware, loss of 
                          business, revenue, profits or investment, or use of software or hardware that does not meet  
                          's systems requirements.Shypdeck shall also not be liable for any damages including damages 
                          resulting from revenue loss, profit loss, use, data, goodwill, business interruption, fraudulent
                           or illicit acts perpetuated by users or any other intangible losses(whether Shypdeck has been 
                            advised of the possibility of such damages or not) arising out of Shypdeck’s Website or 
                            Services(including, without limitation to inability to use, or arising from the result of the use 
                                of Shypdeck’s Website or Services) whether such damages are based on warranty, tort, 
                                contract, statute or any other legal theory.`
                }}
            />

            <OfficialParagraph

                className='sub no-order'

                {...{
                    title: "Indemnity",
                    value: `You agree to defend, indemnify, and hold Shypdeck, its employees, contractors, directors,
                            employees, agents, licensors, and suppliers, harmless from and against any claims, actions or
                            demands, liabilities and settlements including without limitation, reasonable legal and
                            accounting fees, resulting from, or alleged to result from, your violation of this Agreement.`
                }}

            />


            <OfficialParagraph

                className='sub no-order'

                {...{
                    title: "Exclusions",
                    value: `Some jurisdictions do not allow the exclusion of certain warranties or the limitation or
                            exclusion of liability for certain damages.Accordingly, some of the above disclaimers and limitations
                            of liability may not apply to you.To the extent that any Party may not, as a matter of applicable law,
                            disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and
                            the extent of the Shypdeck
                            Party's liability shall be the minimum permitted under such applicable law.`
                }}

            />

            <OfficialParagraph

                className='sub no-order'

                {...{
                    title: `Payment Terms and Processing Fees`,

                    value: `Payments through credit cards and debit cards are collected online by
                        third - party.The user is asked to enter the card number, the expiry date of the
                        card, and its security number.No data is saved.The money is deducted once the user clicks on 'Pay Amount'.
                        We do not guarantee the securedness of this transaction as we are not responsible for their Website or transaction
                        flow.The payments processed are for the delivery services provided by our partner delivery service providers to the user
                        within Lagos, Nigeria. `
                }}

            />


            <OfficialParagraph

                className='sub no-order'

                {...{
                    title: "Refunds",
                    itemsClass: "mb-2",
                    value: `We offer refunds only on the basis that parties delivery order was not satisfied by the select
                            delivery service provider.The User understands that he / she shall not be entitled to a refund
                            where there exists reasonable proof to show that there has been two(2) failed attempt which is traceable
                            to the User’s actions and inactions. `,
                    items: [`Refunds shall be made after Seventy - Two(72) hours of an official request of same has been addressed
                            and considered to be satisfactory in accordance with the provision.Where you require a refund
                            please send us an email via; hello @shypdeck.com `]
                }}

            />

            <OfficialParagraph

                className='sub no-order'

                {...{
                    title: "Applicable Law",
                    value: `These Terms of Use shall be interpreted and governed by the laws currently in force in the Federal
                            Republic of Nigeria.`
                }}

            />

            <OfficialParagraph

                className='sub no-order'

                {...
                {
                    title: "Dispute Resolution",

                    value: `All disputes arising from this Agreement shall be governed by and construed in accordance with
                            Nigerian law.Any dispute arising out of or relating to this Agreement, including any question regarding
                            its existence, validity, contractual obligation, or termination by the Parties, shall be settled through 
                            amicable discussions
                            between the Parties.If any such dispute is not settled between the Parties within fourteen(14) business days,
                            the Parties agree to submit such dispute to Mediation at the Lagos State Multi - Door Courthouse(LMDC) for
                            resolution under the provisions of Lagos State Multi - Door Courthouse(LMDC) Law 2007.]`,
                    items: [
                        `In the event that such dispute is not resolved amicably within 1(one) month, such dispute shall
                            be resolved by the applicable court of competent jurisdiction.Parties agree that the defaulting party would be liable
                            for litigation costs accruing to the contractual disputes.`
                    ]
                }}

            />


            <OfficialParagraph

                className='sub order-numerical'

                title="Termination"

                value={`You may terminate this Agreement by not engaging with or carrying out any transaction on our Website.closing your Account.`}

                content={`We may restrict your access to a complete cycle as required for an order to be successfully 
                            made on our Website where we have reasons to believe the following may have or is currently ongoing:`}

                items={[


                    `you do not comply with any of the provisions of this Agreement;`,
                    `we are required to do so by a Law;`,
                    `we are directed by a financial institution; or`,
                    `where a suspicious or fraudulent transaction occurs.`

                ]}

            />

            <OfficialParagraph

                className='no-order'


                items={[

                    `If you violate these Terms or any of our User T & Cs on the website; Shypdeck reserves the right to issue you a 
                    warning regarding the violation or to immediately terminate or suspend your use of the Services.
                    We may also prohibit your use of the website by blocking computers using your IP address from 
                    accessing the website or contacting your Internet service provider to request that they block your access to the 
                    website and / or bringing court proceedings against you where there has been a violation of these Terms of Use.
                    You agree that Shypdeck does not need to provide you notice before terminating or suspending your use of the 
                    Services, but it may provide such notice at its sole discretion. `,

                    `You agree that you will comply fully with these Terms.You agree to comply with all local and international rules regarding 
                    online conduct.You also agree to comply with all applicable laws affecting the transmission of content or 
                    the privacy of individuals.`

                ]}

            />


            < OfficialParagraph

                className='sub no-order'

                title={"Severability"}

                content={"Where any portion of this Terms of Use is deemed invalid or unenforceable either in whole or in part by any court or tribunal, such part shall be severed from the Terms of Use and shall not affect the validity or enforceability of any other part in this Terms of Use.."}

            />

            <OfficialParagraph

                className='sub no-order'

                title={"Updates, Modifications, and Amendments"}

                items={[
                    `As our technology evolves, we may need to update, modify, or amend our Terms of Use, tools, utilities, or general updates.We reserve the right to make changes to this Terms of Use at any time without notice to you. `,
                    `We advise that you check this page often, referring to the date of the last modification on the page to ensure you are familiar with the current version of the Terms of Use.If a User objects to any of the changes to the Terms of Use, the User must cease using our Website and / or Services immediately.`
                ]}

            />

            <OfficialParagraph

                className='sub no-order'

                title={"Complaints"}

                dangerousContent={`
        <p> If you have any complaints or reservations about us or any of the Services we provide, you may contact us via: <a href="mailto:hello@shypdeck.com"> hello@shypdeck.com</a> </p>`}

            />





        </>
    )
}





