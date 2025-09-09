import React, { useState } from 'react';
import ProfileForm from '../components/dashboard/Profile/ProfileForm';
import { useForm } from 'react-hook-form';
import ProfileButton from '../components/dashboard/Profile/profileButton';
import PasswordChangeForm from '../components/dashboard/Profile/PasswordChangeForm';

const Profile = () => {
    const [isEditing,setIsEditing] = useState(false)
    const {register,handleSubmit,watch,formState:{errors,isSubmitting}} = useForm()

    
    return (
        <div className='card w-full max-w-2xl mx-auto bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className="card-title text-2xl mb-4">Profile Information</h2>

                <form action="">
                    <ProfileForm register={register} isEditing={isEditing} errors={errors}/>
                    <PasswordChangeForm errors={errors} isEditing={isEditing} register={register} watch={watch}/>
                    <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} isSubmitting={isSubmitting}/>
                </form>

            </div>
        </div>
    );
};

export default Profile;