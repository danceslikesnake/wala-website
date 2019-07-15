import React, { Component } from 'react';
import queryString from 'query-string';

import WalaLogomark from '../FixedElements/WalaLogomark/WalaLogomark';
import FooterNav from '../FooterNav/FooterNav';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import DownloadAppButton from '../FixedElements/DownloadAppButton/DownloadAppButton';

import './Terms.css';
import WalaLogo from '../../../utils/images/wala-white-logo-full.svg';

class Terms extends Component {
  parseParams = () => {
    let params = queryString.parse(this.props.location.search);
    return params;
  };

  render() {
    let webView = false;

    if (this.props.location.search) {
      let params = this.parseParams();
      webView = params.viewApp;
    }

    return (
      <div id="Terms" style={webView ? { paddingTop: 16 } : null}>
        {!webView && <MobileNavBar />}
        {!webView && <DownloadAppButton />}
        <WalaLogomark />
        <div className="has-text-centered legal-header">
          <img src={WalaLogo} alt="Wala Logo" className="legal-logo" />
          <div className="legal-headline">Terms &amp; Conditions</div>
        </div>
        <div className="legal-body">
          <h3>Terms & Conditions</h3>
          <p>
            These Basic Transfer, Inc. (Wala) Terms of Service ("Terms of
            Service") govern your access to and use of the Wala mobile
            application provided by Basic Transfer, Inc., ("Wala "we," or "us")
            and the services made available through the App ("Services"). PLEASE
            READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING THE APP
            OR THE SERVICES, YOU AGREE TO BE BOUND BY THE TERMS OF SERVICE. IF
            YOU DO NOT WISH TO BE BOUND BY THESE TERMS OF SERVICE, YOU MAY NOT
            ACCESS OR USE THE APP OR THE SERVICES. You may not use the App or
            Services, or accept these Terms of Service, if (a) you are not of
            legal age to form a binding contract with Wala; or (b) you are
            prohibited by law from receiving or using the Services.
          </p>
          <p>
            Wala may change these Terms of Service from time to time at its sole
            discretion by posting notice of the change on the App, provided that
            if Wala makes any changes that materially alter the terms by which
            the Services are provided or these Terms of Service, Wala will also
            notify you by sending you an e-mail to the last e-mail address you
            provided to Wala in accordance with Section 3. Any changes to these
            Terms of Service will be effective immediately if you are a new user
            of the Services and will be effective thirty (30) calendar days
            after posting of notice of such changes on the App if you are an
            existing user, provided that, if you are an existing user, any
            changes that materially alter the terms by which the Services are
            provided or these Terms of Service shall be effective for you upon
            the earlier of thirty (30) calendar days following posting of notice
            of such changes on the App or thirty (30) calendar days after
            dispatch of an e-mail notice of such changes to you. Wala may
            require you to provide consent to the updated Terms of Service in a
            specified manner before further use of the Services is permitted. If
            you do not agree to any change after receiving a notice of such
            change, you shall stop using the Services and terminate this
            Agreement as described below. Otherwise, your consent and continued
            use of the Services constitutes your acceptance of the changes.
            Please regularly check the App to view the then-current Terms of
            Service.
          </p>
          <p className="p-head">1. Overview</p>
          <p>
            The Services enable you to earn non-monetary points in accordance
            with the Points Guidelines in FAQs if you perform certain activities
            related to your personal finances (e.g. tracking your spending or
            paying down your debt, as well as non-monetary actions, such as,
            financial education, inviting friends or completing your profile.)
            Subject to Section 13 below, you may use such points to enter
            Challenges promoted on the App.
          </p>
          <p className="p-head">2. Additional Terms</p>
          <p>
            Certain features of the Services or App may be subject to additional
            guidelines, terms, or rules, which will be posted on the Services or
            App in connection with such features ("Additional Terms"). All such
            Additional Terms and the Wala Privacy Policy ("Privacy Policy") are
            incorporated by reference into these Terms of Service. If there is
            any conflict between these Terms of Service and the Additional
            Terms, the Additional Terms will take precedence in relation to the
            particular feature of the App or Services.
          </p>
          <p className="p-head">3. User Account</p>
          <p>
            You must register for a user account ("Account") to access the
            Services. When you create an Account, you will be asked to select a
            unique username and create a password. We may require you to submit
            certain additional information to complete your registration. You
            represent and warrant that: (a) all registration information you
            submit is truthful and accurate, (b) you will maintain the accuracy
            of such information, and (c) your use of the Services does not
            violate any applicable law. Wala reserves the right to require you
            to change or update your username and password in Wala’s sole
            discretion from time to time. You are responsible for maintaining
            the confidentiality of your username and password, and are solely
            responsible for all activities that occur under your username. You
            agree (i) not to allow any third party to use your Account, username
            or password at any time and (ii) to notify Wala promptly of any
            actual or suspected unauthorized use of your Account, username or
            password, or any other breach or suspected breach of these Terms of
            Service. Wala reserves the right to terminate your username and
            password when Wala reasonably believes they may have been used by an
            unauthorized third party
          </p>
          <p className="p-head">4. Dala Wallet</p>
          <p>
            Upon opening an Account you will be granted access to a Dala Wallet
            that supports the deposit, withdrawal, and storage of the
            cryptocurrency Dala (“Dala”). Depositing funds into your Dala Wallet
            must follow the instructions provided within the App exactly. Funds
            transferred incorrectly (to the wrong address, wrong account, using
            the wrong currency, etc.) cannot be guaranteed by Wala.
          </p>
          <p>
            You may receive Dala into your Dala Wallet by providing the sender
            with a receive address in your Dala Wallet or through a connection
            in the Connect area of the App. Your Wallet will only be credited
            with Dala if the sender has sent Dala.
            <br />
            <br />
            In the event you know, suspect, or should reasonably know or
            suspect, that Dala has been credited to your Dala Wallet in error,
            you must immediately notify Wala of the error by emailing{' '}
            <a href="mailTo:support@getwala.com">support@getwala.com</a>. You
            accept and agree that you have no claim or entitlement to any Dala
            received in error, and must immediately return such funds in
            accordance with the instructions received from Wala.
            <br />
            <br />
            The payment methods by which you may purchase Dala will depend upon
            the country you are in (for the purposes of these Terms, the
            “Supported Deposit Methods”). Where you have made a Deposit using a
            Supported Deposit Method, and have adhered to the deposit
            instructions in the App, your deposit will be allocated to your Dala
            Wallet.
            <br />
            <br />
            To permit timely and successful allocation of a Deposit to your Dala
            Wallet, you must use a reference number provided to you in App when
            making your deposit. Wala is not responsible for any delays due to
            an incorrect reference number.Under no circumstances will Wala have
            any liability to you in relation to any delay in or failure of a
            Deposit reflecting in your Dala Wallet.
            <br />
            <br />
            When you use your Dala Wallet to send or receive digital currency,
            the transaction must be confirmed and recorded on the Dala network.
            The digital currency network is solely responsible for verifying and
            confirming any such transactions. Wala cannot confirm, cancel or
            reverse transactions on a digital currency network.
            <br />
            <br />
            You will be able to redeem Dala in your Dala Wallet within the Wala
            Market (“Market”). Providers and products vary by country and are
            subject to availability in accordance with the providers and Wala’s
            partners. Product prices may vary based on changes in product
            pricing and Dala to local currency exchange rates.
            <br />
            <br />
            Before using the Dala Wallet, you should ensure that you understand
            the risks involved in buying, selling, or trading digital
            currencies. Digital currency markets can be volatile and prices can
            fluctuate significantly, which could result in sudden and
            significant increases or decreases in the value of your assets. You
            should carefully assess whether your financial situation and risk
            tolerance is suitable for buying, selling, or trading Dala. You
            accept and agree that you are solely responsible for any decision to
            buy, sell, trade, or otherwise hold or deal with digital currency.
            <br />
            <br />
            Wala securely stores all Supported Digital Currency private keys
            (“Private Keys”) associated with any Dala Wallet. You accept and
            agree that Wala shall retain full ownership and control of the
            Private Keys associated with your Dala Wallet and that you shall
            have no control of, access to, or the ability to use, such Private
            Keys.
          </p>
          <p className="p-head">5. Identity Verification</p>
          <p>
            Wala implements Know Your Customer (“KYC”) processes and controls as
            part of our commitment to combating fraud and assisting in the
            prevention of money laundering and terrorist financing. Wala
            voluntarily adheres to local and international compliance standards
            in relation to customer due diligence. To ensure we meet these
            standards, our customers are required to provide certain personal
            details and documents when opening a Wala Account. The nature and
            extent of the Identity Verification required will depend upon which
            of our supported countries you are resident in, and the deposit and
            withdrawal limits that you wish to apply. In certain circumstances,
            Wala may also perform enhanced due diligence (“EDD”) procedures. You
            accept and agree that you will remain subject to such procedures at
            all times.
            <br />
            <br />
            Wala reserves the right to, at any time restrict or suspend your
            Wala Account when we, in our sole discretion, consider it necessary
            to carry out further Identity Verification and/or EDD or terminate
            your Wala Account if you provide, or we suspect you have provided,
            false information or refuse to provide information we require for
            Identity Verification and/or EDD.
            <br />
            <br />
            You accept and agree that there may be delays in accessing your Wala
            Account, or in carrying out transactions through your Wala Account,
            while we undertake any Identity Verification and/or EDD procedures.
          </p>
          <p className="p-head">6. License</p>
          <p>
            The information, data, results, ideas, plans, sketches, texts,
            files, links, images, photos, video, sound, inventions (whether or
            not patentable), notes, works of authorship, articles, feedback, or
            other materials ("Content") available on the App (the "App Content")
            are protected by copyright laws throughout the world. The
            compilation of the App Content on the App is the exclusive property
            of Wala and its suppliers and is protected by U.S. and international
            copyright laws. Subject to the terms and conditions of these Terms
            of Service, Wala grants you a personal, limited, non-exclusive,
            non-transferable, and revocable license, during the Term (as defined
            in Section 18), to (i) access the Services for your personal,
            non-commercial use and (ii) view the App Content for your personal,
            non-commercial use. Wala and its suppliers reserve all rights not
            granted in these Terms of Service.
          </p>
          <p className="p-head">7. Restrictions</p>
          <p>You agree that you will not:</p>
          <div className="fake-list">
            <p>
              ·&nbsp;&nbsp;&nbsp;Permit any third party to access and/or use the
              Service;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Access or attempt to access any other Wala
              systems, programs or data that are not made available for public
              use;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Rent, lease, loan, sell access to, or otherwise
              exploit for any commercial purpose the App, the App Content or
              Services; except as expressly permitted under these Terms of
              Service, copy, reproduce, republish, upload, post, transmit,
              resell, distribute or perform any App Content;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Interfere with, disrupt, alter, translate, or
              modify the App or Services or any part thereof;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Access or use the App or Services in any manner
              that could damage, disable, overburden or impair any Wala server
              or the networks connected to any Wala server (including, without
              limitation, any third party websites that are linked to via the
              Services);
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Work around any technical limitations in the
              Services, use any tool to enable features or functionalities that
              are otherwise disabled in the Services or decompile, disassemble,
              or otherwise reverse engineer the Services except as otherwise
              permitted by applicable law;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Access the Services in order to (i) build a
              competitive product or service, (ii) build a product using similar
              ideas, features, functions or graphics of the App or Services, or
              (iii) copy any ideas, features, functions or graphics of the App
              or Services;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Introduce software or automated agents or
              scripts to the App or Services so as to produce multiple accounts,
              generate automated searches, requests and queries, or to strip or
              mine data from the App or Services;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Perform or publish any performance or benchmark
              tests or analyses relating to the App or Services or the use
              thereof;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Remove any copyright or other proprietary
              notices on any App Content;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Frame or utilize framing techniques to enclose
              any trademark, logo, or other proprietary information (including
              images, text, page layout or form) of Wala without Wala’s written
              consent;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Cover or obscure any page or part of the App,
              App Content, or Services via HTML/CSS, scripting, or any other
              means;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Use or access the App or Services other than as
              permitted under Section 6; or
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Use, or encourage or permit others to use, the
              App or Services to:
            </p>
            <div className="extra-padding">
              <p>o Stalk and/or harass another;</p>
              <p>o Harm minors in any way;</p>
              <p>
                o Impersonate any person or entity, or falsely state or
                otherwise misrepresent your affiliation with a person or entity;
              </p>
              <p>
                o Forge headers or otherwise manipulate identifiers to disguise
                the origin of any App Content posted on or transmitted through
                the App or Services;
              </p>
              <p>
                o Use the App, Services or App Content such that it will mislead
                a third party into believing that he or she is interacting
                directly with Wala or the Services;
              </p>
              <p>
                o Engage in any chain letters contests, junk email, pyramid
                schemes, spamming, surveys or other duplicative or unsolicited
                messages (commercial or otherwise);
              </p>
              <p>
                o Use any Wala domain name as a pseudonymous return email
                address; or
              </p>
              <p>
                o Market any goods or services for any business purposes
                (including advertising and making offers to buy or sell goods or
                services), unless specifically allowed to do so by Wala.
              </p>
            </div>
          </div>
          <p className="p-head">8. Modification</p>
          <p>
            Wala reserves the right, at any time, to modify the App Content or
            Services or to modify, suspend, or discontinue the App or Services
            or any part of the foregoing with or without notice. You agree that
            Wala will not be liable to you or to any third party for any
            modification of the App Content or Services or modification,
            suspension, or discontinuance of the App or Services.
          </p>
          <p className="p-head">9. User Content</p>
          <div className="fake-list">
            <p>
              ·&nbsp;&nbsp;&nbsp;<strong>User Content.</strong> "User Content"
              means any Content provided, imported or uploaded to the Service by
              you or on your behalf via the App. By uploading, distributing, or
              otherwise using your User Content with the App or Services, you
              grant, and you represent and warrant that you have the right to
              grant, Wala an irrevocable, non-exclusive, royalty-free and fully
              paid, worldwide license, with the right to grant sublicenses, to
              reproduce, distribute, publicly display, publicly perform, prepare
              derivative works of, incorporate into other works, and otherwise
              use the User Content, as necessary, for purposes of displaying the
              User Content on the Services or App. You are solely responsible
              for your User Content. You assume all risks associated with use of
              your User Content, including any reliance on its accuracy,
              completeness or usefulness by Wala or others, or any disclosure of
              your User Content that makes you or any third party personally
              identifiable.
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;<strong>Acceptable Content.</strong> You
              represent and warrant that your User Content shall not
            </p>
            <div className="extra-padding">
              <p>o infringe any copyright, trademark, or patent;</p>
              <p>o misappropriate any trade secret;</p>
              <p>
                o be deceptive, defamatory, obscene, pornographic, invasive of
                another’s privacy, hateful, or racially, ethnically or otherwise
                objectionable;
              </p>
              <p>
                o contain any viruses, worms or other malicious computer
                programming codes able to damage the App, the Services, or any
                data of the Services;
              </p>
              <p>
                o violate any law, regulation, or contractual obligation; or
              </p>
              <p>
                o otherwise violate these Terms of Service or the rights of any
                third party.
              </p>
            </div>
            <p>
              ·&nbsp;&nbsp;&nbsp;<strong>Content Loss.</strong> You are solely
              responsible to keep and maintain your own copy of all User Content
              that is provided to the Services and Wala. Wala is not obligated
              to back up any User Content that is posted on the Services. Wala
              therefore recommends that you create backup copies of any User
              Content posted on the Services at your sole cost and expense. You
              agree that Wala may (but has no obligation to), in Wala’s sole
              discretion, remove or modify any User Content which it deems to
              violate your representations and warranties in these Terms of
              Service. You agree and acknowledge that Wala has no obligation to
              retain the User Content, and may delete such User Content, at any
              time.
            </p>
          </div>
          <p className="p-head">10. IP Ownership</p>
          <p>
            As between you and us, the App, the Services, the App Content
            (excluding User Content), and any of Wala’s proprietary technology,
            software, hardware, processes, algorithms, user interfaces,
            know-how, designs and other tangible or intangible technical
            material or information used by Wala in providing the Services, and
            all intellectual property rights in each of the foregoing (the "Wala
            Technology") is the exclusive property of Wala or its suppliers.
            "Wala” and other related graphics, logos, service marks, and trade
            names used on the App are the trademarks of Wala or its third party
            licensors and may not be used without Wala’s written permission or
            the written permission of such third parties.
          </p>
          <p className="p-head">11. Feedback</p>
          <p>
            Wala will treat any all suggestions, ideas, enhancement requests,
            feedback, recommendations or other information ("Feedback") you
            provide to Wala as non-confidential and non-proprietary. Thus, in
            the absence of a written agreement with Wala to the contrary, you
            agree that you will not submit to Wala any information or ideas that
            you consider to be confidential or proprietary. You hereby
            irrevocably and unconditionally assign to Wala all Feedback provided
            by you related to the App, the Services, the App Content or the Wala
            Technology including all worldwide intellectual property rights in
            the foregoing.
          </p>
          <p className="p-head">12. Communications</p>
          <p>
            When you visit the App or send emails to us, you are communicating
            with us electronically. You consent to receive communications from
            us electronically. We will communicate with you by email or by
            posting notices on the App. You agree that all agreements, notices,
            disclosures and other communications that we provide to you
            electronically satisfy any legal requirement that such
            communications be in writing.
          </p>
          <p className="p-head">13. Privacy</p>
          <p>
            Our privacy practices with regard to the personal information that
            you provide to us is set forth in the Privacy Policy.
          </p>
          <p className="p-head">14. Rewards</p>
          <p>
            From time to time, Wala may offer you the chance to win and earn
            prizes on the App ("Rewards"). Such Rewards are provided subject to
            the Rules posted on the App in connection with each reward.
          </p>
          <p className="p-head">15. Links to Third Party Websites</p>
          <p>
            The App may contain links to advertisements, web sites and services
            provided by third parties. Such third party advertisements, web
            sites and services are not under the control of Wala. Wala is not
            responsible for the content of any third party advertisements, web
            sites and services or any link contained in a third party
            advertisement, App or service. Wala provides these links only as a
            convenience and does not review, approve, monitor, endorse, warrant,
            or make any representations with respect to third party
            advertisements, web sites and services.
          </p>
          <p className="p-head">16. Warranty Disclaimers</p>
          <p>
            ·&nbsp;&nbsp;&nbsp;<strong>NO WARRANTY.</strong> WALA IS PROVIDING
            THE APP, THE APP CONTENT, AND THE SERVICES ON AN "AS IS" BASIS FOR
            USE AT YOUR OWN RISK. WALA DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS
            IMPLIED, OR STATUTORY, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES
            OF TITLE, NONINFRINGEMENT OF THIRD PARTY RIGHTS, MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND QUIET ENJOYMENT.
            BASIC TRANSFER, INC. DOES NOT WARRANT THE ACCURACY OR COMPLETENESS
            OF THE APP CONTENT OR THE INFORMATION PROVIDED ON THE APP OR THAT
            THE SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED. INFORMATION ON THE
            APP MAY NOT BE CURRENT AT THE MOMENT YOU VISIT THIS APP AND MAY
            CONTAIN ERRORS. CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON
            IMPLIED WARRANTIES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
            ABOVE DISCLAIMERS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL
            RIGHTS UNDER APPLICABLE LAW.
          </p>
          <p>
            ·&nbsp;&nbsp;&nbsp;<strong>FINANCIAL ADVICE.</strong> WALA IS NOT
            PROVIDING, AND THE SERVICES ARE NOT INTENDED TO PROVIDE, LEGAL, TAX
            OR FINANCIAL ADVICE. WALA IS NOT A FINANCIAL PLANNER, BROKER OR TAX
            ADVISOR. Your personal financial situation is unique, and any
            information and advice obtained through the Service may not be
            appropriate for your situation. Accordingly, before making any
            financial decisions, you should seek additional information and
            advice from your own accountant or other financial advisers who are
            fully aware of your individual circumstances.
          </p>
          <p className="p-head">17. Limitation of Liability</p>
          <p>
            IN NO EVENT SHALL WALA BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR
            RELATED TO THESE TERMS OF SERVICE, THE APP, THE APP CONTENT, OR THE
            SERVICES, INCLUDING, WITHOUT LIMITATION, ANY DAMAGES RESULTING FROM
            LOSS OF USE, DATA, OR PROFITS, WHETHER OR NOT WALA HAS BEEN ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES, ON ANY THEORY OF LIABILITY.
            WALA’S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE
            TERMS OF SERVICE, THE APP, THE APP CONTENT, AND THE SERVICES,
            WHETHER UNDER CONTRACT, TORT, OR ANY OTHER THEORY OF LIABILITY,
            SHALL NOT EXCEED FIFTY DOLLARS ($50). CERTAIN JURISDICTIONS DO NOT
            ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS
            APPLY TO YOU, SOME OR ALL OF THE ABOVE EXCLUSIONS OR LIMITATIONS MAY
            NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS UNDER
            APPLICABLE LAW.
          </p>
          <p className="p-head">18. Copyright</p>
          <p>
            If you believe that the copyright in your work has been violated
            through the Services, please contact Wala’s agent for notice of
            claims of copyright infringement using the contact information below
            and provide the following information, which Wala may then forward
            to the alleged infringer:
          </p>
          <div className="fake-list">
            <p>
              ·&nbsp;&nbsp;&nbsp;Identify the material on the Services that you
              believe infringes your work, with enough detail so that Wala may
              locate it on the Services;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Provide a statement that you have a good faith
              belief that the disputed use is not authorized by the copyright
              owner, its agent, or the law;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Provide your address, telephone number, and
              email address;
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Provide a statement that (i) the information
              that you have provided to Wala is accurate, and (ii) you are the
              owner of the copyright interest involved or are authorized to act
              on behalf of the owner; and
            </p>
            <p>
              ·&nbsp;&nbsp;&nbsp;Provide your physical and electronic signature.
            </p>
            <p>
              Upon receiving your complaint, Wala may remove content that you
              believe infringes your copyright. In addition, Wala may terminate
              the account of the member who appears to be infringing your
              intellectual property rights.
            </p>
            <p>
              <strong>Wala Digital Finance</strong>
              <br />
              <br />
              33 Church Street 9th Floor
              <br />
              Cape Town 8000
              <br />
              South Africa
            </p>
            <p>
              E-mail: <a href="mailTo:info@getwala.com">info@getwala.com</a>
            </p>
          </div>
          <p className="p-head">19. Termination</p>
          <p>
            These Terms of Service will continue to apply until terminated by
            either you or Wala as set forth below (the "Term"). We may terminate
            these Terms of Service at any time for any reason or no reason in
            accordance with the Rules by sending you an e-mail to the address of
            record in your Account. In addition, these Terms of Service will
            automatically terminate upon any breach of these Terms of Service by
            you. You may terminate these Terms of Service at any time by (a)
            notifying Wala at any time by sending an e-mail to{' '}
            <a href="mailTo:info@getwala.com">info@getwala.com</a> with the
            subject "Termination of Terms of Service" and (b) closing your
            Account for the Services. Upon any termination of this Agreement,
            you shall promptly discontinue use of the App and the Services and
            your Account and right to access and use the Services and App will
            terminate immediately, including access to your User Content and the
            permanent forfeiture of any earned points, plays or any other
            credits or awards. However, Sections 7 (User Content), 8 (IP
            Ownership), 9 (Feedback), 14 (Warranty Disclaimers), 15 (Limitation
            of Liability), 17 (Termination), and 19 (General Provisions) of
            these Terms of Service will survive any termination of the Terms of
            Service. You agree that we will have no liability to you for any
            costs, expenses, losses, damages, or liabilities arising from or
            relating to such termination.
          </p>
          <p className="p-head">20. Indemnification</p>
          <p>
            You will indemnify and hold Wala harmless from any action brought
            against Wala insofar as such action is based on a claim by any third
            party arising from or related to (a) any improper or unauthorized
            use of the Services by you; (b) your User Content; or (c) your
            breach of any of your representations or warranties contained in
            these Terms of Service.
          </p>
          <p className="p-head">21. General Provisions</p>
          <p>
            If any provision of these Terms of Service is, for any reason, held
            to be invalid or unenforceable, the other provisions of these Terms
            of Service will be unimpaired and the invalid or unenforceable
            provision will be deemed modified so that it is valid and
            enforceable to the maximum extent permitted by law. These Terms of
            Service and any action related thereto will be governed, controlled,
            interpreted, and defined by and under the laws of the State of
            Illinois without giving effect to any conflicts of laws principles
            that require the application of the law of a different state. By
            using or accessing the App or the Services, you hereby expressly
            consent to the personal jurisdiction and venue in the 5<sup>th</sup>{' '}
            floor of the Woodstock Exchange at 66 Albert Road Woodstock, 7915,
            which is the county of Wala’s principal place of business, for any
            lawsuit filed there against you by Wala arising from or related to
            these Terms of Service.
          </p>
        </div>
        {!webView && <FooterNav />}
      </div>
    );
  }
}

export default Terms;
