import {message} from 'antd';

export function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

export function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('La imagen no corresponde al formato JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Sube una imagen menor a 2MB!');
    }
    return isJpgOrPng && isLt2M;
};