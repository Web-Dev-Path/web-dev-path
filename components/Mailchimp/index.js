import MailchimpSubscribe from 'react-mailchimp-subscribe';
import React from 'react';

const Mailchimp = ({ child }) => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  let childToBeRendered = React.cloneElement(child);

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        childToBeRendered = {
          ...childToBeRendered,
          props: {
            ...child.props,
            subscribe,
            status,
            message,
          },
        };

        return <>{childToBeRendered}</>;
      }}
    />
  );
};

export default Mailchimp;
