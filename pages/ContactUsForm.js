import { useForm } from 'react-hook-form';
import Container from '@/components/containers/Container';
import contactUsFormStyles from '@/styles/Contact.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import ButtonLink from '@/components/buttons/ButtonLink';

export default function ContactUsForm(props) {
  const { customBtnClass, link, linkText, type } = props;
  const {
    register,
    handleSubmit,
    reset,
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
    reset();
  }

  console.info('these are errors;', errors);

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
              minLength: 2,
              maxLength: 80,
              //no white space pattern
              pattern: /[^\s-]/i,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__name}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Name?.type === 'required'
              ? 'Name is required'
              : errors.Name?.type === 'pattern'
              ? 'No whitespace'
              : errors.Name?.type === 'minLength'
              ? 'Must be more than 1 character'
              : undefined}
          </p>
          <input
            type='email'
            placeholder='email'
            {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__email}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Email?.type === 'required' && 'Email is required'}
          </p>
          <input
            type='text'
            placeholder='subject'
            {...register('Subject', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i,
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__subject}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Subject?.type === 'required'
              ? 'Subject is required'
              : errors.Subject?.type === 'pattern'
              ? 'No whitespace'
              : errors.Subject?.type === 'minLength'
              ? 'Must be more than 1 character'
              : undefined}
          </p>
          <textarea
            {...register('Message', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i,
            })}
            placeholder='Write your message here'
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__message}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Message?.type === 'required'
              ? 'Message is required'
              : errors.Message?.type === 'pattern'
              ? 'No whitespace'
              : errors.Message?.type === 'minLength'
              ? 'Must be more than 1 character'
              : undefined}
          </p>
          <div className={contactUsFormStyles.contact__subscribe}>
            <input
              className={contactUsFormStyles.contact__subscribeInput}
              type='checkbox'
              placeholder='Subscribe to our DevNews!'
              {...register('Subscribe', {})}
            />
            Subscribe to our DevNews!
          </div>
          <ButtonLink link={link} customClassName={props.customBtnClass}>
            {linkText}
          </ButtonLink>
        </form>
      </Container>
    </RevealContentContainer>
  );
}

//add btnlink
