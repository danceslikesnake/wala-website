import React, { Component } from 'react';
import queryString from 'query-string';

import WalaLogomark from '../FixedElements/WalaLogomark/WalaLogomark';
import FooterNav from '../FooterNav/FooterNav';

import './Privacy.css';
import WalaLogo from '../../../utils/images/wala-white-logo-full.svg';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import DownloadAppButton from '../FixedElements/DownloadAppButton/DownloadAppButton';

class Privacy extends Component {
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
      <div id="Privacy" style={webView ? { paddingTop: 16 } : null}>
        {!webView && <MobileNavBar />}
        {!webView && <DownloadAppButton />}
        <WalaLogomark />
        <div className="has-text-centered legal-header">
          <img src={WalaLogo} alt="Wala Logo" className="legal-logo" />
          <div className="legal-headline">Privacy Policy</div>
        </div>
        <div className="legal-body">
          <h3>Privacy Policy</h3>
          <p>
            Basic Transfer, Inc. ("Wala") is committed to protecting your
            privacy. We have prepared this Privacy Policy to describe to you our
            practices regarding the Personal Data (as defined below) we collect
            from users of our mobile application, ("App") and the services made
            available through the App ("Services"). Capitalized terms not
            defined in this Privacy Policy have the meaning set forth in the
            Terms of Service.
          </p>
          <div className="p-head">User Consent</div>
          <p>
            By using our App or Services, you agree to the terms of this Privacy
            Policy and you expressly consent to the processing of your Personal
            Data in accordance with this Privacy Policy. Wala collects Personal
            Data and Anonymous Data from you when you use our App, when you send
            us information or communications, and/or when you use the Services.
          </p>
          <div className="p-head">A Note About Children</div>
          <p>
            We do not intentionally gather Personal Data about visitors who are
            under the age of 13.
          </p>
          <div className="p-head">Types of Data We Collect</div>
          <p>
            "Personal Data" means data that allows someone to identify or
            contact you, including, for example, your name, address, telephone
            number, e-mail address, as well as any other non-public information
            about you that is associated with or linked to any of the foregoing
            data. This also includes financial information such as transactional
            data and financial goals for which you have provided. "Anonymous
            Data" means data that is not associated with or linked to your
            Personal Data; Anonymous Data does not permit the identification of
            individual persons.
          </p>
          <div className="p-head">Personal Data You Provide to Us</div>
          <p>
            We collect Personal Data from you, such as your e-mail address, when
            you register for an account to log in to the Services. If you
            provide us feedback or contact us via e-mail (e.g., in response to
            an employment opportunity posted on our App), we will collect your
            name and e-mail address, as well as any other content included in
            the e-mail, in order to send you a reply, and any information that
            you submit to us, such as a resume.
          </p>
          <p>
            When you participate in one of our surveys or games, we may collect
            additional profile information. When you post messages on the forums
            or message boards of our App, the information contained in your
            posting will be stored on our servers and other users will be able
            to see it. We also collect other types of Personal Data that you
            provide to us voluntarily, such as first name, last name, mailing
            address, phone number, salary, age, date of birth, gender, education
            level, and marital status. We may also collect Personal Data, such
            as demographic information from you via the Services or at other
            points in our App that state that Personal Data is being collected.
            You may choose not to provide us with certain information, but this
            may limit the features that you can use or the functionality of the
            Services.
          </p>
          <div className="p-head">Personal Data Collected via Technology</div>
          <p>
            To make our App and Services more useful to you, our servers (which
            may be hosted by a third party service provider) collect Personal
            Data from you, including internet protocol address, geographic
            location, operating system, browser type, domain name, and a
            date/time stamp for your visit. Like most Internet services, we
            automatically gather this Personal Data and store it in log files
            each time you visit the App or access your account on the Services.
          </p>
          <p>
            <strong>"Cookies"</strong>
            are small pieces of information that a website sends to your
            computer’s hard drive while you are viewing a website. We use
            Cookies and navigational data like Uniform Resource Locators (URL)
            to gather information regarding the date and time of your visit and
            the solutions and information for which you searched and which you
            viewed.
          </p>
          <p>
            <strong>"Web Beacons"</strong>
            are images embedded in a Web page or email to measure and analyze
            App usage and activity. We, or third party providers acting on our
            behalf, may use Web Beacons to help us analyze App usage and to
            improve the Services.
          </p>
          <p>
            <strong>
              Personal Data That We Collect from You About Others.
            </strong>
            If you decide to invite a third party to use the Services, we will
            collect such third party’s name and e-mail address so that we may
            send such third party an invitation to use the Services. You or the
            third party may contact us at info@getwala.com to request the
            removal of this information from our database.
          </p>
          <p>
            <strong>
              Personal and/or Anonymous Data Collected by Third Parties.
            </strong>
            We may receive Personal and/or Anonymous Data about you from other
            sources like telephone or fax, or from companies that offer their
            products and/or services on the App ("Third Party Companies"). We
            may add this information to the information we have already
            collected from you via the App in order to improve the Services.
          </p>
          <div className="p-head">Use of Your Data</div>
          <p>
            <strong>General Use.</strong>
            In general, Personal Data you submit to us is used either to respond
            to requests that you make, or to aid us in serving you better. Wala
            uses your Personal Data in the following ways:
          </p>
          <div className="fake-list">
            <p>· to provide you with the Services;</p>
            <p>
              · to analyze your personal finance activities and reward you with
              points for your performance of certain activities;
            </p>
            <p>
              · to personalize and better tailor the features, performance and
              support of the Services for your use;
            </p>
            <p>
              · to send you administrative notifications, such as security or
              support and maintenance advisories;
            </p>
            <p>
              · to respond to your inquiries related to employment opportunities
              or other requests;
            </p>
            <p>
              · to send you promotional/marketing information, newsletters,
              surveys, offers or other information;
            </p>
            <p>
              · to provide you with opportunities and functionality that we
              think would be of particular interest to you;
            </p>
            <p>· to improve the quality of the App and the Services,</p>
            <p>
              · to analyze, benchmark and conduct research on, user data and
              user interactions with the Services; and
            </p>
            <p>
              · to conduct market research, planning, troubleshooting, planning
              problems, detecting and protecting against error, fraud, or other
              criminal activity;
            </p>
            <p>· to solicit your feedback.</p>
          </div>
          <p>
            <strong>Cookies.</strong>
            We may use both session Cookies (which expire once you close your
            web browser) and persistent Cookies (which stay on your phone until
            you delete them) to provide you with a more personal and interactive
            experience on the App, to tailor the App to your interests, to
            better understand how you interact with the Services, and to monitor
            aggregate usage and web traffic routing on the App and Services. We
            may use third party service providers to help us analyze certain
            online activities. For example, these service providers may help us
            analyze visitor activity on the App. We may allow these service
            providers to use Cookies or other technologies to perform these
            services for us. We do not share any Personal Data about our
            customers with these third party service providers, and these
            service providers do not collect Personal Data on our behalf.
            Persistent Cookies can be removed by following Internet browser help
            file directions. If you choose to disable Cookies, some areas of the
            App may not work properly.
          </p>
          <p>
            <strong>Creation of Anonymous Data.</strong>
            We may create Anonymous Data records from Personal Data by excluding
            information (such as your name) that make the data personally
            identifiable to you. We use this Anonymous Data to analyze request
            and usage patterns so that we may enhance the content of the App or
            the Services and improve App use. Wala reserves the right to use and
            disclose Anonymous Data to Third Party Companies in its discretion.
          </p>
          <p>
            <strong>Feedback.</strong>
            If you provide feedback on the App or the Services to us, we may use
            such feedback for any purpose, provided we will not associate such
            feedback with your Personal Data. Wala will collect any information
            contained in such communication and will treat the Personal Data in
            such communication in accordance with this Privacy Policy.
          </p>
          <div className="p-head">Disclosure of Your Personal Data</div>
          <p>
            Wala, its subsidiaries, any joint ventures, or other companies under
            a common control (collectively, "Affiliates"), may in the future
            share some or all of your Personal Data with each other, in which
            case we will require our Affiliates to honor this Privacy Policy.
          </p>
          <p>
            <strong>Forums, Message Boards and Chats.</strong>
            We may make message boards, chat rooms, and other interactive forums
            available on the Services. You should be aware that any information
            which you post to these interactive forums or otherwise choose to
            make publicly available, including your Personal Data, may be
            disclosed and available to all users who have access to that portion
            of the Services, and is therefore no longer private. By using these
            interactive forums, you agree that we are not responsible for any
            information that you disclose or communicate in such forums, and any
            disclosures you make are at your own risk. Please be thoughtful
            about what you post and make publicly available through the
            Services.
          </p>
          <p>
            <strong>Other Disclosures.</strong>
            Regardless of any choices you make regarding your Personal Data (as
            described below), Wala may disclose Personal Data if it believes in
            good faith that such disclosure is necessary to (a) comply with
            relevant laws or to respond to subpoenas or warrants served on Wala
            or (b) protect or defend the rights or property of Wala or other
            users of the Services.
          </p>
          <div className="p-head">Third Parties</div>
          <p>
            <strong>Links to Third Party Websites.</strong>
            The Services may link to websites operated by third parties that we
            do not control. This includes any sites that you linked to from
            advertisements that appear on the Services. Our provision of such
            links is for your convenience and does not signify our endorsement
            of such other website or location or its products, services, or
            contents. When you click on such a link, you will leave our site and
            go to another site. During this process, another entity may collect
            Personal Data or Anonymous Data from you. We have no control over,
            do not review, and cannot be responsible for, these outside websites
            or their products, services, or content. Please be aware that the
            terms of this Privacy Policy do not apply to these outside websites,
            or to any collection of data after you click on links to such
            outside websites.
          </p>
          <p>
            <strong>Disclosure to Third Party Service Providers.</strong>
            Except as otherwise stated in this policy, we do not generally sell,
            trade, share, or rent the Personal Data collected from the Services
            to other entities. However, we may employ, and share your Personal
            Data with, third party companies and individuals ("Service
            Providers") to facilitate or enhance our App or Services, to provide
            the Services on our behalf, to perform tasks (e.g., without
            limitation, maintenance services, database management, web analytics
            and improvement of the App or Services), to retrieve and store FI
            Access Information and FI Account Data, or to assist us in analyzing
            how our Services are used. These third party service providers are
            required not to use or disclose your Personal Data other than to
            provide the services requested by us. You expressly consent to the
            sharing of your Personal Data with our Service Providers for the
            sole purpose of providing services requested by us.
          </p>
          <p>
            <strong>Disclosure to Third Party Companies.</strong>
            We may enter into agreements with Third Party Companies. A Third
            Party Wala may want access to Personal Data that we collect from its
            customers. As a result, we may disclose your Personal Data to a
            Third Party Company; however, we will not disclose your Personal
            Data to Third Party Companies for the Third Party Companies’ own
            direct marketing purposes, unless you have "opted-in" by following
            the instructions we provide to allow such disclosure. If you have
            opted-in to receive e-mail communications from a Third Party Company
            and later wish to discontinue receipt of these e-mails, please
            contact the Third Party Company directly to update your preferences.
            The privacy policies of our Third Party Companies may apply to the
            use and disclosure of your Personal Data that we collect and
            disclose to such Third Party Companies. Because we do not control
            the privacy practices of our Third Party Companies, you should read
            and understand their privacy policies.
          </p>
          <div className="p-head">
            Your Choices Regarding Your Personal Data
          </div>
          <p>
            <strong>Choices.</strong>
            We offer you choices regarding the collection, use, and sharing of
            your Personal Data. We may periodically send you newsletters or
            messages via e-mail, telephone, postal mail, SMS, or social networks
            that notify you of new points, prizes, winnings, or opportunities
            available through the App or Services, provide you with updates
            regarding the App or Services, and directly promote the use of the
            App or Services and may contain advertisements for Third Party
            Companies. When you receive newsletters or promotional
            communications from us, you may indicate a preference to stop
            receiving further communications from us and you will have the
            opportunity to "opt-out" by contacting us directly (please see
            contact information below). Should you decide to opt-out of
            receiving future communications, we may share your contact
            information with third parties to ensure that you do not receive
            further communications from third parties. Despite your indicated
            preferences, we may send you notices of any updates to our Terms of
            Service or Privacy Policy.
          </p>
          <p>
            <strong>Changes to Personal Data.</strong>
            You may change any of your Personal Data in your account by editing
            your profile within the Services. You may request deletion of your
            Personal Data by us, but please note that we may be required (by law
            or otherwise) to keep this information and not delete it (or to keep
            this information for a certain time, in which case we will comply
            with your deletion request only after we have fulfilled such
            requirements). When we delete any information, it will be deleted
            from the active database, but may remain in our archives.
          </p>
          <div className="p-head">Security of Your Personal Data</div>
          <p>
            Wala is committed to protecting the security of your Personal Data.
            We use a variety of industry-standard physical, electronic, and
            procedural safeguards to help protect your Personal Data from
            unauthorized access, use, or disclosure. We also require you to
            enter a password to access your account information. Please do not
            disclose your account password to unauthorized people. From the time
            you submit your username and password, communications between your
            computer and the Wala are encrypted using secure socket layer
            technology to make your information unreadable as it passes over the
            Internet. While the Wala uses these and other reasonable efforts to
            protect your Personal Data, no method of transmission over the
            Internet, or method of electronic storage, is 100% secure, however.
            Therefore, Wala cannot guarantee absolute security of your Personal
            Data.
          </p>
          <div className="p-head">Contact Information</div>
          <p>
            Wala welcomes your comments or questions regarding this Privacy
            Policy. Please e-mail us at info@getwala.com or contact us at the
            following address:
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
          <div className="p-head">Changes to This Privacy Policy</div>
          <p>
            This Privacy Policy is subject to occasional revision, and if we
            make any substantial changes in the way we use your Personal Data,
            we will notify you by sending you an e-mail to the last e-mail
            address you provided to us and/or by prominently posting notice of
            the changes on our App. Any changes to this Privacy Policy will be
            effective immediately if you are a new user of the Services and will
            be effective thirty (30) calendar days after posting of notice of
            such changes on the App if you are an existing user, provided that,
            if you are an existing user, any material changes shall be effective
            for you upon the earlier of thirty (30) calendar days following
            posting of notice of such changes on the App or thirty (30) calendar
            days after dispatch of an e-mail notice of such changes to you.
            Please note that at all times you are responsible for updating your
            Personal Data to provide us with your most current e-mail address.
            In the event that the last e-mail address that you have provided us
            is not valid, or for any reason is not capable of delivering to you
            the notice described above, our dispatch of the e-mail containing
            such notice will nonetheless constitute effective notice of the
            changes described in the notice. In any event, changes to this
            Privacy Policy may affect our use of Personal Data that you provided
            to us prior to our notification to you of the changes. If you do not
            wish to permit changes in our use of your Personal Data, you must
            notify us prior to the effective date of the changes that you wish
            to deactivate your account with us. Continued use of the App or
            Services, following notice of such changes shall indicate your
            acknowledgement of such changes and agreement to be bound by the
            terms and conditions of such changes.
          </p>
        </div>
        {!webView && <FooterNav />}
      </div>
    );
  }
}

export default Privacy;
