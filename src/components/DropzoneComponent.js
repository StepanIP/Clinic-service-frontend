import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/dropzone.css';

const Dropzone = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const onDrop = async (acceptedFiles) => {
        const photo = acceptedFiles[0];
        setSelectedPhoto(photo);

        try {
            console.log('Фото успішно відправлено на сервер');
        } catch (error) {
            console.error('Помилка відправлення фото на сервер', error);
        }
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*'
    });
    return (
        <div>
            <div {...getRootProps()} className='dropzone bg-white'>
                <input {...getInputProps()} />
                <p className='dropzone-title tx-gray'>{isDragActive ? 'Перетягніть фото сюди' : 'Перетягніть фото сюди або натисніть для вибору'}</p>
            </div>
            {selectedPhoto && (
                <div>
                    <p className='tx-green'>Вибрано фото: {selectedPhoto.name}</p>
                </div>
            )}
        </div>
    );
};
export default Dropzone;