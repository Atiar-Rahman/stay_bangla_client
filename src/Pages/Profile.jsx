import React, { useState } from 'react';
import ProfileForm from '../components/dashboard/Profile/ProfileForm';
import { useForm } from 'react-hook-form';
import ProfileButton from '../components/dashboard/Profile/profileButton';
import PasswordChangeForm from '../components/dashboard/Profile/PasswordChangeForm';
import useAuthContext from '../hook/useAuthContext';

const Profile = () => {
    const [isEditing,setIsEditing] = useState(false)
    const { user, updateUserProfile, changePassword } = useAuthContext();
    const {register,handleSubmit,setValue,watch,formState:{errors,isSubmitting}} = useForm()
    // console.log(user)
    if (user) {
      setValue("first_name", user.first_name || "");
      setValue("last_name", user.last_name || "");
      setValue("email", user.email || "");
      setValue("phone_number", user.phone_number || "");
    }
    
    const handleProfileUpdate = async (data) => {
      console.log(data);
      try {
        // Profile update
        const profilePayload = {
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          phone_number: data.phone_number,
        };

        await updateUserProfile(profilePayload);
        // Password Change
        if (data.current_password && data.new_password) {
          await changePassword({
            current_password: data.current_password,
            new_password: data.new_password,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className='card w-full max-w-2xl mx-auto bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className="card-title text-2xl mb-4">Profile Information</h2>

                <form onSubmit={handleSubmit(handleProfileUpdate)} action="">
                    <ProfileForm register={register} isEditing={isEditing} errors={errors}/>
                    <PasswordChangeForm errors={errors} isEditing={isEditing} register={register} watch={watch}/>
                    <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} isSubmitting={isSubmitting}/>
                </form>

            </div>
        </div>
    );
};

export default Profile;