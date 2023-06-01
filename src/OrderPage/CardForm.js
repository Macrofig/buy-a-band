import { TextInput } from "../components/TextInput"

export const CardForm = ({card, onChange}) => {
    return (<>
        <div className="mb-4">
            <TextInput
                type="tel"
                placeholder="0000 0000 0000 0000"
                aria-label="Credit card number"
                pattern="[0-9]{16}"
                maxLength="16"
                required
                onChange={(rawNumber) => {
                    const cardNumber = parseInt(rawNumber, 10)
                    if (!isNaN(cardNumber)) onChange({cardNumber})
                    if (rawNumber.trim() === '') onChange({cardNumber: ''})
                }}
            />
        </div>
        <div className="flex gap-x-4 mb-4">
            <TextInput
                type="tel"
                placeholder="MM / YY"
                aria-label="Expire date"
                pattern="[0-9]{4}"
                maxLength="4"
                required
                value={card.expiry ?? ''}
                onChange={(rawNumber) => {
                    const expiry = parseInt(rawNumber, 10)
                    if (!isNaN(expiry)) onChange({expiry})
                    if (rawNumber.trim() === '') onChange({expiry: ''})
                }}
            />
            <TextInput
                type="tel"
                placeholder="000"
                aria-label="CVV code"
                required
                pattern="[0-9]{3,4}"
                maxLength="4"
                value={card.cvv ?? ''}

                onChange={(rawNumber) => {
                    const cvv = parseInt(rawNumber, 10)
                    if (!isNaN(cvv)) onChange({cvv})
                    if (rawNumber.trim() === '') onChange({cvv: ''})
                }}
            />
        </div>
    </>)
}