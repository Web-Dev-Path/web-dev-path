import { useForm } from 'react-hook-form';
import Container from '@/components/containers/Container';
import contactUsFormStyles from '@/styles/Contact.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
// import ButtonLink from '@/components/buttons/ButtonLink';

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
    },
  });
  
  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <RevealContentContainer>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={contactUsFormStyles.contact__form}
        >
          <input
            type='text'
            placeholder='name'
            {...register('Name', {
              required: true,
              maxLength: 80,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__name}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>{errors.Name?.type === 'required' && "Name is required"}</p>
          <input
            type='email'
            placeholder='email'
            {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__email}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>{errors.Email?.type === 'required' && "Email is required"}</p>
          <input
            type='text'
            placeholder='subject'
            {...register('Subject', { required: true })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__subject}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>{errors.Subject?.type === 'required' && "Subject is required"}</p>
          <textarea
            {...register('Message', { required: true })}
            placeholder='Write your message here'
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__message}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>{errors.Message?.type === 'required' && "Message is required"}</p>
          <div className={contactUsFormStyles.contact__subscribe}>
            <input
              className={contactUsFormStyles.contact__subscribeInput}
              type='checkbox'
              placeholder='Subscribe to our DevNews!'
              {...register('Subscribe', {})}
            />
            Subscribe to our DevNews!
          </div>

          <button
            className={contactUsFormStyles.contact__button}
            type='submit'
            href='/'
          >
            Submit
          </button>
        </form>
      </Container>
    </RevealContentContainer>
  );
}

//add btnlink
