module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
        company_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        company_name: {
            type: Sequelize.STRING,
            allowNull: false,  // Ensures that a company name is required
        },
        company_address: {
            type: Sequelize.STRING,
            allowNull: true,   // Address can be nullable if not mandatory
        },
        contact_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts',  // Name of the table you're referencing
                key: 'id',          // The foreign key in the contacts table
            },
            onUpdate: 'CASCADE',   // Optional: updates foreign key if contact id is updated
            onDelete: 'SET NULL',  // Optional: sets contact_id to null if the contact is deleted
        }
    }, {
        tableName: 'companies',    // Explicitly naming the table (optional)
        timestamps: true,          // Optional: adds createdAt and updatedAt fields
    });

    return Company;
};
