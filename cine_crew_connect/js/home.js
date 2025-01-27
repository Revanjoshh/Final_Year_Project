document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const searchBtn = document.getElementById("search-btn");
    const filterBtn = document.getElementById("filter-btn");
    const profilesContainer = document.getElementById("profiles-container");

    // Navigate to Login
    loginBtn.addEventListener("click", () => {
        window.location.href = "http://localhost/user-login/index.html";
    });

    // Navigate to Register
    registerBtn.addEventListener("click", () => {
        window.location.href = "http://localhost/user-login/register.html";
    });

    // Search by Name and Filter by Role
    const fetchProfiles = (role = 'all', search = '') => {
        fetch(`get_profiles.php?role=${role}&search=${search}`)
            .then(response => response.json())
            .then(profiles => {
                profilesContainer.innerHTML = ''; // Clear existing profiles

                if (profiles.length === 0) {
                    profilesContainer.innerHTML = '<p>No profiles found.</p>';
                } else {
                    profiles.forEach(profile => {
                        const profileCard = document.createElement("div");
                        profileCard.classList.add("profile-card");
                        profileCard.innerHTML = `
                            <img src="images/${profile.profile_pic}" alt="${profile.name}" class="profile-img">
                            <h3>${profile.name}</h3>
                            <p>${profile.role}</p>
                            <p>${profile.bio}</p>
                        `;
                        profilesContainer.appendChild(profileCard);
                    });
                }
            })
            .catch(error => console.error('Error fetching profiles:', error));
    };

    // Search profiles by name
    searchBtn.addEventListener("click", () => {
        const name = document.getElementById("search-name").value;
        fetchProfiles('all', name); // Search without filtering by role
    });

    // Filter profiles by role
    filterBtn.addEventListener("click", () => {
        const role = document.getElementById("role-select").value;
        fetchProfiles(role); // Fetch profiles based on selected role
    });

    // Initial fetch (all profiles)
    fetchProfiles();
});
