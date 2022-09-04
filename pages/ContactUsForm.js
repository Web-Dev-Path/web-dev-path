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
  const onSubmit = data => console.log(data);
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
              required: 'This is required',
              maxLength: 80,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__name}`}
          />
          <p>{errors.Name?.message}</p>
          <input
            type='email'
            placeholder='email'
            {...register('Email', {
              required: 'This is required',
              pattern: /^\S+@\S+$/i,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__email}`}
          />
          <p>{errors.Email?.message}</p>
          <input
            type='text'
            placeholder='subject'
            {...register('Subject', { required: 'This is required' })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__subject}`}
          />
          <p>{errors.Subject?.message}</p>
          <textarea
            {...register('Message', { required: 'This is required' })}
            placeholder='Write your message here'
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__message}`}
          />
          <p>{errors.Message?.message}</p>
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
