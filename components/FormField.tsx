type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
};

const FormField = ({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100" htmlFor="">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        ></textarea>
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={state}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;
