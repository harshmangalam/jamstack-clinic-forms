function MaritalStatus({ register }) {
  return (
    <section className="flex flex-col space-y-2">
      <p>Gender</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <input
            id="married"
            name="married"
            type="radio"
            value="married"
            {...register("maritalStatus")}
          />
          <label htmlFor="married">Married</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="single"
            name="single"
            type="radio"
            value="single"
            {...register("maritalStatus")}
          />
          <label htmlFor="single">Single</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="divorced"
            name="divorced"
            type="radio"
            value="divorced"
            {...register("maritalStatus")}
          />
          <label htmlFor="divorced">Diavorced</label>
        </div>


        <div className="flex items-center space-x-2">
          <input
            id="other"
            name="other"
            type="radio"
            value="other"
            {...register("maritalStatus")}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </section>
  );
}

export default MaritalStatus;
