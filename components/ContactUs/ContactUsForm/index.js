import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Container from '@/components/containers/Container';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import { SubmitButton } from '@/components/buttons/SubmitButton';
import { contactSchema } from '@/utils/schemas/contact';
import styles from './ContactUsForm.module.scss';

function ContactUsForm({ subject, setResponseMessage, getReCaptchaToken }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: subject || '',
      message: '',
    },
  });

  async function onSubmit(data) {
    const gReCaptchaToken = await getReCaptchaToken();

    if (!gReCaptchaToken) {
      setResponseMessage(['Please, refresh your screen and try it again.']);
      return;
    }
    setResponseMessage(['Submitting...']);
    const res = await fetch('/api/validateReCaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        subscribe: data.subscribe,
        gReCaptchaToken,
      }),
    });

    if (res.ok) {
      setResponseMessage([
        'Your message was sent successfully. We will be in touch with you as soon as possible.',
      ]);
    } else {
      const jsonRes = await res.json();
      setResponseMessage([
        'Error Submitting Message',
        `Status Code: ${res.status} - ${jsonRes.message}`,
        'Please contact support at hello@webdevpath.co',
      ]);
    }
    reset();
  }

  return (
    <RevealContentContainer>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            type='text'
            placeholder='name'
            {...register('name')}
          />
          <p className={styles['error-msg']}>{errors.name?.message}</p>
          <input
            className={styles.input}
            type='email'
            placeholder='email'
            {...register('email')}
          />
          <p className={styles['error-msg']}>{errors.email?.message}</p>
          <input
            className={styles.input}
            type='text'
            placeholder='subject'
            {...register('subject')}
          />
          <p className={styles['error-msg']}>{errors.subject?.message}</p>
          <textarea
            className={styles.textarea}
            {...register('message')}
            placeholder='Write your message here'
          />
          <p className={styles['error-msg']}>{errors.message?.message}</p>
          <label className={styles['subscribe-wrapper']}>
            <input
              className={styles['subscribe-input']}
              type='checkbox'
              placeholder='Subscribe to our DevNews!'
              {...register('subscribe')}
            />
            Subscribe to our DevNews!
          </label>
          <SubmitButton label='Submit' disabled={isSubmitting} />
        </form>
      </Container>
    </RevealContentContainer>
  );
}

export default ContactUsForm;
