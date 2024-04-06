const resume = { resume };

// Iterate through contact information
console.log("Contact Information:");
for (const [key, value] of Object.entries(resume.contact)) {
  console.log(`${key}: ${value}`);
}

// Print summary
console.log("\nSummary:");
console.log(resume.summary);

// Iterate through experience
console.log("\nExperience:");
resume.experience.forEach(job => {
  console.log(`Title: ${job.title}`);
  console.log(`Company: ${job.company}`);
  console.log(`Location: ${job.location}`);
  console.log(`Dates: ${job.dates}`);
  console.log("Responsibilities:");
  job.responsibilities.forEach(responsibility => {
    console.log(`- ${responsibility}`);
  });
});

// Iterate through education
console.log("\nEducation:");
resume.education.forEach(edu => {
  console.log(`Degree: ${edu.degree}`);
  console.log(`Institution: ${edu.institution}`);
  console.log(`Location: ${edu.location}`);
  console.log(`Dates: ${edu.dates}`);
});

// Print skills
console.log("\nSkills:");
resume.skills.forEach(skill => {
  console.log(`- ${skill}`);
});
