import React from 'react';
const faqData = [
  {
    label: 'What is Wala?',
    answer: (
      <div>
        <p>Wala is your first step towards financial prosperity!</p>
        <p>
          With Wala you can earn through small jobs, you can purchase products
          and services like electricity, airtime, and water at zero-fees, you
          can send payments to friends and family for free, and soon you can
          apply for loans!
        </p>
      </div>
    ),
  },
  {
    label: 'What is Wala’s mission?',
    answer: (
      <div>
        <p>Remove barriers. Create opportunities. Enable prosperity.</p>
      </div>
    ),
  },
  {
    label: 'What is Dala and how do I use it?',
    answer: (
      <div>
        <p>
          Dala is digital money. Like airtime or data or mobile money, Dala
          holds value, you can send it to friends, you can buy things with it,
          and you can turn it into cash. As a digital currency and like all
          currencies, it is possible that Dala digital money value may change
          compared to other currencies like South Africa's Rand, the US Dollar,
          or Ugandan Shilling.
        </p>
      </div>
    ),
  },
  {
    label: 'Is Wala a bank?',
    answer: (
      <div>
        <p>
          No, Wala is not a bank. Wala is a financial technology company that
          removes barriers in the financial system, creates opportunities, and
          enables consumers to prosper.
        </p>
      </div>
    ),
  },
  {
    label: 'When I sign up for Wala do I get a bank account?',
    answer: (
      <div>
        <p>
          You won’t get a bank account in the traditional sense. Every user who
          downloads and registers with Wala will receive a Dala wallet. You can
          deposit, withdraw, purchase, send payments, pay bills and do just
          about anything with a Dala wallet. It is like a bank account but holds
          Dala digital money.
        </p>
      </div>
    ),
  },
  {
    label: 'How can Wala offer zero-fee financial services?',
    answer: (
      <div>
        <p>
          Wala’s mission is to remove barriers, create opportunities, and enable
          prosperity and we believe that removing fees for basic services is the
          first step. This means no fees on having a Dala account or sending
          payments to friends in your or any other country. In the Wala market,
          we don’t charge fees but on some products, our providers take a small
          fee.
        </p>
        <p>
          We are able to remove these fees by using Dala digital money. Like
          airtime or data, Dala holds value and can be moved anywhere instantly
          for free because it operates in its own decentralized system.
        </p>
      </div>
    ),
  },
  {
    label: 'How does Wala make money?',
    answer: (
      <div>
        <p>
          Wala is a zero-fee technology platform that wants to provide you with
          a great financial app at no cost. While we charge zero-fees to our
          users, we earn commission through our partnerships with service
          providers.
        </p>
      </div>
    ),
  },
  {
    label: 'Do I need documents or an ID to get a Dala wallet?',
    answer: (
      <div>
        <p>
          Every user who signs up and registers for Wala with a mobile phone
          number will receive a Dala Wallet. Today, you do not need to provide
          any identification to open this Dala wallet.
        </p>
      </div>
    ),
  },
  {
    label: 'Where can I buy Dala?',
    answer: (
      <div>
        <p>
          It depends on your country. In Uganda, you can buy Dala instantly
          using your Mobile Money account. In South Africa, you can send an EFT
          and your account will be credited shortly after confirmation. Our goal
          is to build out a strong merchant and retail base so that you can go
          to any local shop or agent to easily deposit and withdraw from your
          Dala Wallet
        </p>
      </div>
    ),
  },
  {
    label: 'Where can I withdraw my money?',
    answer: (
      <div>
        <p>
          In Uganda, you can withdraw directly in your Mobile money account.
        </p>
        <p>
          While in South Africa you cannot withdraw your funds, you can purchase
          services like airtime, data, and pay bills in-app with Dala in 10+
          countries and send Dala payments to anyone instantly with zero fees.
        </p>
      </div>
    ),
  },
  {
    label:
      'What if I have family living in a different country, can I send payments to them with Wala?',
    answer: (
      <div>
        <p>
          Connect with your friends in the app and send them payments instantly
          and for free. They can now spend it in the market with zero fees
        </p>
        <p>
          Wala is currently available in South Africa, Zimbabwe and Uganda. In
          the coming months, we will be releasing the Wala app to Botswana,
          Ghana, Kenya, Mozambique, Nigeria, Tanzania, United Kingdom, and
          Zambia where you will be able to send a payment via Wala to friends
          and family.
        </p>
      </div>
    ),
  },
  {
    label: '10. How do I know Wala is safe and secure?',
    answer: (
      <div>
        <p>
          Security is our number one priority for our users, which is why we use
          best-of-breed security practices to ensure your account and
          credentials remain safe. We do this in a number of ways:
        </p>
        <ul>
          <li>
            Using the secure remote password protocol for any transmission of
            secrets.
          </li>
          <li>Verifying your provided phone number using SMS.</li>
          <li>
            Logins from new devices are authenticated using the phone number
            provided during registration.
          </li>
          <li>
            Your credentials are not stored anywhere. Not even an administrator
            with the highest privileges would be able to compromise your
            account.
          </li>
        </ul>
      </div>
    ),
  },
  {
    label:
      '11. What if I need to contact the Wala team for support, how can I get in touch?',
    answer: (
      <div>
        <p>
          We are always here to help! If you have immediate questions, concerns,
          problems, or just want to chat you can visit the Help Center in the
          app. You will get an immediate response to any questions. If you are
          unable to get your questions answered or problems resolved from the
          WalaBot someone from the Wala team will be in contact.
        </p>
        <p>
          Additionally, you can reach us via email at{' '}
          <a href="mailTo:support@getwala.com">support@getwala.com</a>.
        </p>
      </div>
    ),
  },
  {
    label: 'How do I invite my friends to Wala?',
    answer: (
      <div>
        <p>
          Inviting friends to Wala is quick and easy. All you need to do is go
          to your “Connect” section in the app and search for a friend. If your
          friend is not currently using Wala you can send them a Wala invite
          through Facebook, Whatsapp, SMS, email, etc.
        </p>
        <p>
          And remember, the more friends you invite the more Dala rewards you
          earn!
        </p>
      </div>
    ),
  },
  {
    label: 'Which countries does Wala work in?',
    answer: (
      <div>
        <p>
          Currently, Wala is available for download in South Africa, Zimbabwe
          and Uganda. Users of these markets can currently use the Wala market
          to purchase products (like airtime, data and electricity) or pay bills
          for friends and family in 10+ markets in addition to their own.
        </p>
        <p>
          In the coming months, we will be releasing the Wala app to Botswana,
          Ghana, Kenya, Mozambique, Nigeria, Tanzania, United Kingdom, and
          Zambia.
        </p>
      </div>
    ),
  },
  {
    label: 'What value-added services are offered in the Wala market?\n',
    answer: (
      <div>
        <p>
          Currently, users are able to purchase airtime, data, and pay bills
          with more value-added services to come! The Wala Market currently
          supports the purchase of value-added services in Kenya, Ghana, Uganda,
          Zimbabwe, Nigeria, South Africa, Zambia, Botswana, Namibia,
          Mozambique, Tanzania, and Malawi.
        </p>
      </div>
    ),
  },
  {
    label: 'What value-added services are offered in the Wala market?\n',
    answer: (
      <div>
        <p>
          Wala is a mobile Android application supported on Android 4.1 and
          above.
        </p>
        <p>
          <strong>*Coming soon:</strong> We intend to release an iOS application
          and USSD solution in 2019.
        </p>
      </div>
    ),
  },
];

const faqDalaData = [
  {
    label: 'What is Wala Earn?',
    answer: (
      <div>
        <p>
          Earn is a new section in Wala, where mobile earning opportunities are
          waiting for you! Anyone can complete small jobs like responding to
          surveys, becoming an ambassador, or testing apps and get paid
          instantly in Dala for your work. All you need is a phone to start
          earning. What’s more, you can work from home and create your hours!
          Become a Wala Earner today!
        </p>
      </div>
    ),
  },
  {
    label: 'How do I make money with Wala Earn?',
    answer: (
      <div>
        <p>
          Every earning opportunity has its own rules, you will find them in the
          Earn section in the app. You need to follow those rules and you will
          be paid for your work. For instance, as an ambassador, you earn on the
          market purchases of your referrals, so you need to sign up your
          friends and make sure they use our zero-fee app!
        </p>
      </div>
    ),
  },
  {
    label: 'Can anyone Earn on Wala? ',
    answer: (
      <div>
        <p>Yes, anyone can become a Wala Earner.</p>
      </div>
    ),
  },
  {
    label: 'What jobs are available today on Wala Earn?',
    answer: (
      <div>
        <p>
          To see all available earning opportunities in Wala Earn, download and
          register for Wala today!{' '}
          <a
            href="http://download.getwala.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            download.getwala.com
          </a>
        </p>
      </div>
    ),
  },
  {
    label: 'Will there be more jobs listed on Wala Earn?',
    answer: (
      <div>
        <p>
          Absolutely! We will continue to expand the number of earning
          opportunities available in the app. It’s a lot easier to save and
          prosper when you earn more money!
        </p>
      </div>
    ),
  },
  {
    label: 'How many small jobs can I complete?\n',
    answer: (
      <div>
        <p>
          You can complete as many jobs as you want. Yet, some earning
          opportunities can be available for a limited duration or in a limited
          number. We recommend to regularly check your app to be sure not to
          miss any!
        </p>
      </div>
    ),
  },
];

export { faqData, faqDalaData };
