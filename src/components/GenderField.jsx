function GenderField({ register }) {
  return (
    <section className="flex flex-col space-y-2">
      <p>Gender</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <input
            id="male"
            name="male"
            type="radio"
            value="male"
            {...register("gender")}
          />
          <label htmlFor="male">Male</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="female"
            name="female"
            type="radio"
            value="female"
            {...register("gender")}
          />
          <label htmlFor="female">Female</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="other"
            name="other"
            type="radio"
            value="other"
            {...register("gender")}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </section>
  );
}

export default GenderField;
