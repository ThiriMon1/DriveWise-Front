import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const FilterBy = () => {
  const [criteria, setCriteria] = useState({
    search: "",
    brand: "",
    model: "",
    year: "",
    condition: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Car Search
      </Typography>
      <Box component="form" sx={{ mb: 3 }}>
        <TextField
          fullWidth
          name="search"
          label="Search"
          variant="outlined"
          size="small"
          value={criteria.search || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => console.log("Search button clicked")}
        >
          Search
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Car Filter
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          name="brand"
          label="Brand"
          variant="outlined"
          size="small"
          value={criteria.brand || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="model"
          label="Model"
          variant="outlined"
          size="small"
          value={criteria.model || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="year"
          label="Year"
          variant="outlined"
          size="small"
          type="number"
          value={criteria.year || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Select
          fullWidth
          name="condition"
          value={criteria.condition || ""}
          onChange={handleChange}
          displayEmpty
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        >
          <MenuItem value="">Condition</MenuItem>
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="Used">Used</MenuItem>
        </Select>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" gutterBottom>
            Price Range:
          </Typography>
          <TextField
            fullWidth
            name="price"
            label="Enter max price"
            variant="outlined"
            size="small"
            value={criteria.price || ""}
            onChange={handleChange}
          />
        </Box>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => setCriteria({})}
        >
          Reset Filters
        </Button>
      </Box>
    </Box>
  );
};

export default FilterBy;
