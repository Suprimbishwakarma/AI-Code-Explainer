"use server";

export async function codeExplain(prevState, formData) {
  const code = formData.get("code");
  const language = formData.get("language");

  try {
    const result = await fetch(`${import.meta.env.VITE_SERVER_URL}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({code, language}),
    });

    if(!result.ok){
        return {
            success: false,
            error: "failed to fetch the result!"
        }
    }

    const data = await result.json();

    return {
        success: true,
        data
    }
  } catch (error) {
    return{
        success: false,
        error: `An error occured: ${error.message}`
    }
  }
}
