import CheckBox from './checkbox'

const Filter = ({ show }) => (
  <div className={`${show ? '' : 'hidden'} lg:block lg:mr-7 flex flex-col w-52`}>
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-sm my-2">Category</h2>
      <div className="flex flex-col">
        <CheckBox text="People" />
        <CheckBox text="Premium" />
        <CheckBox text="Pets" isActive />
        <CheckBox text="Food" isActive />
        <CheckBox text="Landmarks" isActive />
        <CheckBox text="Cities" />
        <CheckBox text="Nature" />
      </div>
    </div>
    <hr className="w-full border-line my-3" />
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-sm my-2">Price range</h2>
      <div className="flex flex-col">
        <CheckBox text="Lower than $20" />
        <CheckBox text="$20 - $100" />
        <CheckBox text="$100 - $200" />
        <CheckBox text="More than $200" />
      </div>
    </div>
  </div>
)

export default Filter;