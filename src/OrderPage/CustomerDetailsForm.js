import {TextInput} from '../components/TextInput'

export const CustomerDetailsForm = ({customer, onChange}) => (
    <>
        <div className="flex gap-x-4 mb-4">
            <TextInput name="first-name" aria-label="First name" required placeholder="First Name" onChange={(firstName) => onChange({firstName})} value={customer.firstName ?? ''} />
            <TextInput name="last-name" aria-label="Last name" required placeholder="Last Name" onChange={(lastName) => onChange({lastName})} value={customer.lastName ?? ''} />
        </div>
        <div className="mb-4">
            <TextInput name="address" aria-label="Address" required placeholder="Address" onChange={(address) => onChange({address})} value={customer.address ?? ''} />
        </div>
    </>
)
