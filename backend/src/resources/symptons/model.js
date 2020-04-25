const create = (connection, dataTypes) => {
    return connection.define(
      "Sympton",
      {
        id: {
          type: dataTypes.UUID,
          defaultValue: dataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: dataTypes.TEXT,
          allowNull: true,
        },
        createdAt: {
          type: dataTypes.DATE,
          allowNull: false,
          field: "created_at",
        },
        updatedAt: {
          type: dataTypes.DATE,
          allowNull: false,
          field: "updated_at",
        },
      },
      {
        timestamps: true,
        freezeTableName: true,
        tableName: 'symptons',
      }
    );
  };
  
  
  module.exports = {
    create,
  };