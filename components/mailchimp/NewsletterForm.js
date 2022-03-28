import { useState } from 'react';
import { decode } from 'html-entities';
import Container from '../Container';
import newsletterStyles from '../../styles/Newsletter.module.scss';

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = event => {
    event.preventDefault();

    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    event.target.reset();

    // On success return true
    return email && email.indexOf('@') > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = event => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = message => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ('0' !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <section className={newsletterStyles.newsletter}>
      <Container className={newsletterStyles.newsletter__inner}>
        <h4 className={newsletterStyles.newsletter__title}>
          Sign up for news &#62;
        </h4>
        <div>
          <form
            className={newsletterStyles.newsletter__form}
            onSubmit={handleFormSubmit}
          >
            <input
              className={`${newsletterStyles.newsletter__input} ${newsletterStyles.newsletter__name}`}
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className={`${newsletterStyles.newsletter__input} ${newsletterStyles.newsletter__email}`}
              onChange={event => setEmail(event?.target?.value ?? '')}
              type="email"
              name="email"
              placeholder="email"
              onKeyUp={event => handleInputKeyEvent(event)}
            />
            <button className={newsletterStyles.newsletter__button}>
              subscribe
            </button>
          </form>
          <div className={newsletterStyles.newsletterFormInfo}>
            {status === 'sending' && (
              <div className={newsletterStyles.newsletterFormSending}>
                Sending...
              </div>
            )}
            {status === 'error' || error ? (
              <div
                className={newsletterStyles.newsletterFormError}
                dangerouslySetInnerHTML={{
                  __html: error || getMessage(message),
                }}
              />
            ) : null}
            {status === 'success' && status !== 'error' && !error && (
              <div
                className={newsletterStyles.newsletterFormSuccess}
                dangerouslySetInnerHTML={{ __html: decode(message) }}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterForm;
