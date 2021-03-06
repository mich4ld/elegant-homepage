import { Fragment, FunctionComponent, h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

interface IProps {
    onClose: () => void;
    onUpdate: (bookmark: IEditBookmark) => void;
    formData: {
        name: string;
        url: string;
    }
}

export interface IEditBookmark {
    url: string;
    name: string;
}

const EditModal: FunctionComponent<IProps> = ({ onClose, onUpdate, formData }) => {
    const inputRef = useRef<any>();
    const [form, setForm] = useState(formData);

    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
    }, []);

    function handleInput(e: any) {
        const value = e.target.value;
        const name = e.target.name;
        setForm(oldForm => ({ ...oldForm, [name]: value }));
    }
    
    function handleSubmit() {
        onUpdate(form);
        onClose();
    }

    return (
        <Modal
            onClose={onClose}> 
            <Fragment>
                <h3>Edit bookmark</h3>
                <div className='column'>
                    <input
                        name="name"
                        value={form.name}
                        placeholder='Name' 
                        onChange={handleInput} 
                    />
                </div>

                <div className='column'>
                    <input 
                        autofocus
                        name="url" 
                        value={form.url} 
                        placeholder='URL' 
                        onChange={handleInput}
                        ref={inputRef}
                    />
                </div>

                <div className='column'>
                    <Button onClick={onClose}> Close </Button>
                    <Button onClick={handleSubmit} primary >Edit</Button>
                </div>
            </Fragment>
        </Modal>
    )
}

export default EditModal;