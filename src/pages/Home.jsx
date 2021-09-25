import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Headline from "../components/Hedline";
import GenderField from "../components/GenderField";
import MaritalStatus from "../components/MaritalStatusField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
function Home() {
  const { register, handleSubmit } = useForm();
  const [loading,setLoading] = useState(false)

  const history = useHistory();

  const onSubmit = async (values) => {
    setLoading(true)
    try {
      const res = await axios.post("/api/clinic", {
        ...values,
        age: Number(values.age),
        height: Number(values.height),
        weight: Number(values.weight),
      });
      setLoading(false)

      history.push("/dashboard");

    } catch (error) {
      setLoading(false)
      console.error(error.response.data);
    }
  };
  return (
    <div className="px-2 md:max-w-6xl mx-auto">
      <Headline />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 border-2 p-4 my-4"
      >
        <InputField name="name" label="Name" register={register} />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField name="dob" label="DOB" type="date" register={register} />
          <InputField
            name="age"
            label="Age"
            type="number"
            register={register}
          />
        </section>
        <GenderField register={register} />

        <InputField name="address" label="Address" register={register} />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField name="city" label="City" register={register} />
          <InputField name="state" label="State" register={register} />
          <InputField name="pincode" label="Pin Code" register={register} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            name="telephone"
            label="Telephone"
            type="tel"
            register={register}
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            register={register}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <InputField
            name="occupation"
            label="Occupation"
            register={register}
          />
          <InputField
            name="height"
            label="Height"
            register={register}
            type="number"
          />
          <InputField
            name="weight"
            label="Weight"
            register={register}
            type="number"
          />
          <InputField
            name="reffredBy"
            label="Reffred by/Found us"
            register={register}
          />
        </section>

        <MaritalStatus register={register} />
        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}

export default Home;
