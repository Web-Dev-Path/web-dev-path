import { useForm } from 'react-hook-form';
// import contactUsFormStyles from '@/styles/Contact.module.scss';
// import ButtonLink from '@/components/buttons/ButtonLink';

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='name'
        {...register('Name', { required: true, maxLength: 80 })}
      />
      <input
        type='email'
        placeholder='email'
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type='text'
        placeholder='Subject'
        {...register('Subject', { required: true })}
      />
      <textarea {...register('Write your message here', { required: true })} placeholder='Write your message here' />
      <input
        type='checkbox'
        placeholder='Subscribe to our DevNews!'
        {...register('Subscribe', {})}
      />
        Subscribe to our DevNews!
    

      <input type='submit' />
    </form>
  );
}

//add btnlink